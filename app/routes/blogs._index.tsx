import { Link, useLoaderData } from "@remix-run/react";
import { Separator } from "~/components/ui/separator";
import { Frontmatter, getBlogs } from "~/utils/blogs.server";

export async function loader() {
  const blogs = await getBlogs();
  return blogs;
}

// TODO: move this to components
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
        {item.frontmatter.title ?? item.slug}
      </h3>
      <p className="text-muted-foreground text-sm">{item.frontmatter.date}</p>
      <p className="py-4">{item.frontmatter.meta?.description}</p>
      <Separator className="my-2" />
    </Link>
  );
}

export default function Blogs() {
  const blogs = useLoaderData<
    Array<{
      slug: string;
      frontmatter: Frontmatter;
    }>
  >();

  return (
    <>
      {/* <h2 className="font-semibold text-2xl py-2">Blogs</h2>
      <p>Learning, failing, iterating: Watch Machine Learning unfold here.</p> */}
      <div className="px-8">
        {blogs.map((blog) => {
          return <BlogItem item={blog} key={blog.slug} />;
        })}
      </div>
    </>
  );
}
