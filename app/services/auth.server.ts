import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import {
  GitHubExtraParams,
  GitHubProfile,
  GitHubStrategy,
} from "remix-auth-github";
import type { AppLoadContext } from "@remix-run/cloudflare";

export const authenticator = (context: AppLoadContext) => {
  const auth = new Authenticator<{
    profile: GitHubProfile;
    tokens: GitHubExtraParams;
  }>(sessionStorage);

  auth.use(
    new GitHubStrategy(
      {
        clientId: context.cloudflare.env.GITHUB_CLIENT_ID!,
        clientSecret: context.cloudflare.env.GITHUB_CLIENT_SECRET!,
        redirectURI: context.cloudflare.env.GITHUB_REDIRECT_URI!,
      },
      async ({ profile, tokens }) => {
        console.log("HERE", context.cloudflare.env.GITHUB_CLIENT_ID);

        return { profile, tokens };
      }
    )
  );

  return auth;
};
