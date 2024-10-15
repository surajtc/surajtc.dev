import {
  json,
  LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { drizzle } from "drizzle-orm/d1";
import React, { useState } from "react";
import { blogs } from "~/drizzle/schema.server";

export const meta: MetaFunction = () => {
  return [
    { title: "[surajtc.dev] Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const db = drizzle(context.cloudflare.env.DB);
  const content = await db.select().from(blogs);

  return json({ blogs: content });
};

export default function Index() {
  const [state, setState] = useState(0);
  const { blogs } = useLoaderData<typeof loader>();

  return (
    <div className="m-8 space-y-4">
      <h1>Cloudflare Test</h1>
      <p>Node Env: {process.env.NODE_ENV}</p>
      <div className="space-x-2">
        <button
          className="bg-white text-black p-1 rounded"
          onClick={() => setState((p) => p + 1)}
        >
          Count: {state}
        </button>

        <Link to="/admin" className="bg-white text-black p-1 rounded">
          Admin Dashboard
        </Link>
      </div>
      <div className="grid grid-cols-5">
        <p>ID</p>
        <p>SLUG</p>
        <p>TITLE</p>
        <p>CREATED</p>
        <p></p>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {blogs.map((i) => (
          <React.Fragment key={i.id}>
            <p>{i.id}</p>
            <p>{i.slug}</p>
            <p>{i.title}</p>
            <p>{i.createdAt}</p>
            <button className="bg-white text-black p-1 rounded">EDIT</button>
          </React.Fragment>
        ))}
      </div>

      <Link to="/test-1">Test 1</Link>
      <Link to="/test-2">Test 2</Link>
    </div>
  );
}
