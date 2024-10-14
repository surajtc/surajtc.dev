import { Form } from "@remix-run/react";

export default function Login() {
  return (
    <div className="m-8 space-y-4">
      <h1>Login</h1>

      <Form action="/auth/github" method="post">
        <button className="bg-white text-black p-1 rounded">
          Login with GitHub
        </button>
      </Form>
    </div>
  );
}
