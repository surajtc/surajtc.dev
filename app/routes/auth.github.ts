import { redirect, ActionFunctionArgs } from "@remix-run/cloudflare";
import { authenticator } from "~/services/auth.server";

export const loader = async () => redirect("/login");

export const action = async ({ request }: ActionFunctionArgs) =>
  authenticator.authenticate("github", request, { successRedirect: "/admin" });
