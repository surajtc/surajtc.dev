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
  return (
    <Link to={`/blog/${blog.slug}`} className="group block px-2 py-3">
      <h3 className="group-hover:underline font-semibold text-lg py-2">
        {blog.frontmatter.meta?.title ?? blog.slug}
      </h3>
      <p className="text-muted-foreground text-sm">{blog.frontmatter.date}</p>
      <p className="py-4">{blog.frontmatter.meta?.description}</p>
      <Separator className="my-2" />
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
