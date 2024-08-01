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
    <Link to={`/blog/${blog.slug}`} className="group block px-2 md:px-0">
      <h3 className="group-hover:underline mt-6">
        {blog.frontmatter.meta?.title ?? blog.slug}
      </h3>
      <p className="text-muted-foreground">
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      </p>
      <p className="min-w-full mt-3 text-muted-foreground text-sm">
        {blog.frontmatter.meta?.description}
      </p>
      <Separator className="mt-2 mb-3" />
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
