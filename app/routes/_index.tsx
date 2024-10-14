import type { MetaFunction } from "@remix-run/cloudflare";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [state, setState] = useState(0);
  return (
    <div className="m-8">
      <h1>Cloudflare Test</h1>
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
