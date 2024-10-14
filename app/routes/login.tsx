import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { getSession } from "~/services/session.server";

type AuthError = {
  error?: { message: string };
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const error = session.get("auth-error");

  return json<AuthError>({ error });
};

export default function Login() {
  const { error } = useLoaderData<typeof loader>();
  return (
    <div className="m-8 space-y-4">
      <h1>Login</h1>
      <div className="flex space-x-2">
        <Link to="/" className="bg-white text-black p-1 rounded">
          Home
        </Link>

        <Form action="/auth/github" method="post">
          <button className="bg-white text-black p-1 rounded">
            Login with GitHub
          </button>
        </Form>
      </div>

      <p>{error && error.message}</p>
    </div>
  );
}
