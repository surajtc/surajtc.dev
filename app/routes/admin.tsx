import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return json(user);
};

export default function Admin() {
  return (
    <div className="m-8 space-y-4">
      <h1>Admin</h1>
    </div>
  );
}
