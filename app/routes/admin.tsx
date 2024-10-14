import {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
} from "@remix-run/cloudflare";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { drizzle } from "drizzle-orm/d1";
import React from "react";
import { blogs } from "~/drizzle/schema.server";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const auth = authenticator(context);

  const user = await auth.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const db = drizzle(context.cloudflare.env.DB);
  const content = await db.select().from(blogs);

  return json({ user: user.profile, blogs: content });
};

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const slug = formData.get("slug") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const createdAt = formData.get("createdAt") as unknown as number;

  const db = drizzle(context.cloudflare.env.DB);
  await db.insert(blogs).values({ slug, content, title, createdAt }).execute();

  return json({ message: "Resource added" }, { status: 201 });
};

export default function Admin() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="m-8 space-y-4">
      <h1>Admin</h1>

      <div>
        <p>Logged In as - {data.user._json.login}</p>
      </div>

      <div className="flex space-x-2">
        <Link to="/" className="bg-white text-black p-1 rounded">
          Home
        </Link>

        <Form action="/logout" method="post">
          <button className="bg-white text-black p-1 rounded">Logout</button>
        </Form>
      </div>

      <div className="grid grid-cols-5">
        <p>ID</p>
        <p>SLUG</p>
        <p>TITLE</p>
        <p>CREATED</p>
        <p></p>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {data.blogs.map((i) => (
          <React.Fragment key={i.id}>
            <p>{i.id}</p>
            <p>{i.slug}</p>
            <p>{i.title}</p>
            <p>{i.createdAt}</p>
            <button className="bg-white text-black p-1 rounded">EDIT</button>
          </React.Fragment>
        ))}
      </div>

      <Form method="POST" className="space-y-2">
        <div className="grid grid-cols-5 gap-2">
          <div>
            <label>
              Slug: <input type="text" name="slug" required />
            </label>
          </div>
          <div>
            <label>
              Title: <input type="text" name="title" required />
            </label>
          </div>

          <div>
            <label>
              Created At: <input type="number" name="createdAt" required />
            </label>
          </div>
        </div>

        <div>
          <label>
            Content: <textarea name="content" required />
          </label>
        </div>
        
        <button type="submit" className="bg-white text-black p-1 rounded">
          Add Blog
        </button>
      </Form>
    </div>
  );
}
