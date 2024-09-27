import { useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/utils/blog.server";
import { List } from "~/components/list";

export const loader = async () => {
  return await getBlogs();
};

export default function Blogs() {
  const blogs = useLoaderData<typeof loader>();
  return (
    <div className="p-4">
      <List
        list={blogs.map((v) => ({
          title: v.frontmatter.meta?.title || "",
          subtitle: new Date(v.frontmatter.date || "").toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }
          ),
          description: v.frontmatter.meta?.description || "",
          link: v.slug,
        }))}
      />
      {/* <h2 className="font-semibold text-2xl pb-2">Blogs</h2> */}
      {/* <p>Learning, failing, iterating: Watch Machine Learning unfold here.</p> */}
    </div>
  );
}
