import { Link, useLoaderData } from "@remix-run/react";
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
    <div>
      <Link to={`${item.slug}`}>
        <p>{item.frontmatter.meta?.title ?? item.slug} </p>
      </Link>
      <p>{item.frontmatter.meta?.description}</p>
    </div>
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
      Blogs
      <p>
        <br /> Learning, failing, iterating: Watch Machine Learning unfold here.
      </p>
      {blogs.map((blog) => {
        return <BlogItem item={blog} key={blog.slug} />;
      })}
    </>
  );
}
