import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import React, { useMemo } from "react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params["*"];

  try {
    const blog = await import(`../content/blog/${slug}.mdx`);

    if (!blog.default) {
      throw new Error("MDX content not found in the imported module");
    }

    return json({ slug });
  } catch (error) {
    throw new Response("Not Found", { status: 404 });
  }
};

export default function Blog() {
  const { slug } = useLoaderData<typeof loader>();

  const MDXContent = useMemo(
    () => React.lazy(() => import(`../content/blog/${slug}.mdx`)),
    [slug]
  );

  return (
    <div>
      <MDXContent />
    </div>
  );
}
