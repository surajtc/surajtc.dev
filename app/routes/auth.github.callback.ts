import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const auth = authenticator(context);

  return auth.authenticate("github", request, {
    successRedirect: "/admin",
    failureRedirect: "/login",
  });
};
