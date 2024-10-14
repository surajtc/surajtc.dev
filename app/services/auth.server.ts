import { Authenticator, AuthorizationError } from "remix-auth";
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
  }>(sessionStorage, { sessionKey: "auth", sessionErrorKey: "auth-error" });

  auth.use(
    new GitHubStrategy(
      {
        clientId: context.cloudflare.env.GITHUB_CLIENT_ID!,
        clientSecret: context.cloudflare.env.GITHUB_CLIENT_SECRET!,
        redirectURI: context.cloudflare.env.GITHUB_REDIRECT_URI!,
      },
      async ({ profile, tokens }) => {
        if (profile.id !== context.cloudflare.env.GITHUB_ACCOUNT_ID) {
          throw new AuthorizationError("Invalid Credentials");
        }

        return { profile, tokens };
      }
    )
  );

  return auth;
};
