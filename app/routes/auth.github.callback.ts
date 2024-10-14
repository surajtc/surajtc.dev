import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) =>
  authenticator.authenticate("github", request, {
    successRedirect: "/admin",
    failureRedirect: "/login",
  });
