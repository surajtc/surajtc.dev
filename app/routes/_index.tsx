import {
  json,
  LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "[surajtc.dev] Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const uri = context.cloudflare.env.GITHUB_REDIRECT_URI || "Not Found";

  return json({ uri });
};

export default function Index() {
  const [state, setState] = useState(0);
  const data = useLoaderData<typeof loader>();

  return (
    <div className="m-8 space-y-4">
      <h1>Cloudflare Test</h1>
      <p>Node Env: {process.env.NODE_ENV}</p>
      <p>GitHub URI: {data.uri}</p>
      <div>
        <button
          className="bg-white text-black p-1 rounded"
          onClick={() => setState((p) => p + 1)}
        >
          Count: {state}
        </button>
      </div>
    </div>
  );
}
