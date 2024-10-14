import { redirect, ActionFunctionArgs } from "@remix-run/cloudflare";
import { authenticator } from "~/services/auth.server";

export const loader = async () => redirect("/login");

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const auth = authenticator(context);

  return auth.authenticate("github", request, { successRedirect: "/admin" });
};
