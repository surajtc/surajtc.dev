import BlogList from "~/components/blog-list";

import { useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/utils/blog.server";

export const loader = async () => {
  return await getBlogs();
};

export default function Blogs() {
  const blogs = useLoaderData<typeof loader>();
  return (
    <>
      <h2 className="font-semibold text-2xl pb-2">Blogs</h2>
      <p>Learning, failing, iterating: Watch Machine Learning unfold here.</p>
      <div className="px-1">
        <BlogList blogs={blogs} />
      </div>
    </>
  );
}
