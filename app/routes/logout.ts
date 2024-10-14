import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { authenticator } from "~/services/auth.server";

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const auth = authenticator(context);

  return await auth.logout(request, { redirectTo: "/login" });
};
