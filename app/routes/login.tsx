import { Form, Link } from "@remix-run/react";

export default function Login() {
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
    </div>
  );
}
