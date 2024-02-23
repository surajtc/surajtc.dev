import { LoaderFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import { Frontmatter, getBlog } from "~/utils/blogs.server";
import { getMDXComponent } from "mdx-bundler/client/index.js";

type LoaderData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontmatter: any;
  code: string;
};

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const slug = params["*"];
  if (!slug) throw new Response("Not found", { status: 404 });

  const blog = await getBlog(slug);
  if (blog) {
    const { frontmatter, code } = blog;
    return json({ frontmatter, code });
  } else {
    throw new Response("Not found", { status: 404 });
  }

  return null;
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const frontmatter = data.frontmatter as Frontmatter;
  const title = frontmatter.meta?.title ?? "Black Sheep Code";
  const description = frontmatter.meta?.description ?? undefined;

  // TODO: Handle other meta tags here
  return [{ title: title }, { name: "description", content: description }];
};

function BlogHeader(props: { frontmatter: Frontmatter }) {
  const { frontmatter } = props;

  // We can implement whatever we want here
  return <>{JSON.stringify(frontmatter, null, 2)}</>;
}

export default function Blog() {
  const { code, frontmatter } = useLoaderData<LoaderData>();

  const BlogContent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <BlogHeader frontmatter={frontmatter} />
      <BlogContent />
    </>
  );
}
