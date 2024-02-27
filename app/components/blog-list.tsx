import { Link, useLoaderData } from "@remix-run/react";
import { Frontmatter, getBlogs } from "~/utils/blog.server";
import { Separator } from "./ui/separator";

export async function loader() {
  const blogs = await getBlogs();
  return blogs;
}

function BlogItem(props: {
  item: {
    slug: string;
    frontmatter: Frontmatter;
  };
}) {
  const { item } = props;
  return (
    <Link to={`${item.slug}`} className="group block px-2 py-3">
      <h3 className="group-hover:underline font-semibold text-lg py-2">
        {item.frontmatter.meta?.title ?? item.slug}
      </h3>
      <p className="text-muted-foreground text-sm">{item.frontmatter.date}</p>
      <p className="py-4">{item.frontmatter.meta?.description}</p>
      <Separator className="my-2" />
    </Link>
  );
}

export default function BlogList() {
  const blogs = useLoaderData<
    Array<{
      slug: string;
      frontmatter: Frontmatter;
    }>
  >();
  console.log(blogs);
  return (
    <>
      {blogs && blogs.map((blog) => <BlogItem item={blog} key={blog.slug} />)}
    </>
  );
}
