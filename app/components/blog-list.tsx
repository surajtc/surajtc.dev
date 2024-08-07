import { Link } from "@remix-run/react";
import { Blogs, Frontmatter } from "~/utils/blog.server";
import { Separator } from "./ui/separator";

interface Props {
  blogs: Blogs;
}

export type Blog = {
  slug: string;
  frontmatter: Frontmatter;
};

function BlogItem({ blog }: { blog: Blog }) {
  const date = new Date(blog.frontmatter.date || "");

  return (
    <Link to={`/blog/${blog.slug}`} className="group block">
      <h3 className="group-hover:underline mt-6 font-semibold">
        {blog.frontmatter.meta?.title ?? blog.slug}
      </h3>
      <p className="text-muted-foreground text-sm mt-1">
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      </p>
      <p className="min-w-full mb-3 mt-4 text-primary/90">
        {blog.frontmatter.meta?.description}
      </p>
      <Separator />
    </Link>
  );
}

export default function BlogList({ blogs }: Props) {
  return (
    <>
      {blogs && blogs.map((blog) => <BlogItem blog={blog} key={blog.slug} />)}
    </>
  );
}
