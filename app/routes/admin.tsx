import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const auth = authenticator(context);

  const user = await auth.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return json(user);
};

export default function Admin() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="m-8 space-y-4">
      <h1>Admin</h1>

      <div>
        <p>Logged In as - {data.profile._json.login}</p>
      </div>

      <div className="flex space-x-2">
        <Link to="/" className="bg-white text-black p-1 rounded">
          Home
        </Link>

        <Form action="/logout" method="post">
          <button className="bg-white text-black p-1 rounded">Logout</button>
        </Form>
      </div>
    </div>
  );
}
