import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import {
  GitHubExtraParams,
  GitHubProfile,
  GitHubStrategy,
} from "remix-auth-github";

export const authenticator = new Authenticator<{
  profile: GitHubProfile;
  tokens: GitHubExtraParams;
}>(sessionStorage);

authenticator.use(
  new GitHubStrategy(
    {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
      redirectURI: process.env.GITHUB_REDIRECT_URI || "",
    },
    async ({ profile, tokens }) => {
      console.log("HERE", process.env.GITHUB_CLIENT_ID);

      return { profile, tokens };
    }
  )
);
