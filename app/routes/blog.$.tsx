import {
  LinksFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  json,
} from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import { Frontmatter, getBlog } from "~/utils/blog.server";
import { getMDXComponent } from "mdx-bundler/client/index.js";

import styles from "highlight.js/styles/github-dark-dimmed.min.css";

type LoaderData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontmatter: any;
  code: string;
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

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
  const date = new Date(frontmatter.date || "");

  // We can implement whatever we want here
  return (
    <>
      <h1 className="font-bold text-2xl py-2">{frontmatter.meta?.title}</h1>
      <p className="text-muted-foreground text-sm pb-6">
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      </p>
    </>
  );
}

export default function Blog() {
  const { code, frontmatter } = useLoaderData<LoaderData>();

  const BlogContent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <BlogHeader frontmatter={frontmatter} />
      <article className="prose dark:prose-invert min-w-full prose-pre:p-0">
        <BlogContent />
      </article>
    </>
  );
}
