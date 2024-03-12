import path from "path";
import parseFrontMatter from "front-matter";
import { readFile, readdir } from "./fs.server";
import { bundleMDX } from "./mdx.server";

import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

// The frontmatter can be any set of key values
// But that's not especially useful to use
// So we'll declare our own set of properties that we are going to expect to exist
export type Frontmatter = {
  author?: string;
  date?: string;
  tags?: string;
  meta?: {
    title?: string;
    description?: string;
  };
};

export type Blogs = {
  slug: string;
  frontmatter: Frontmatter;
}[];

export async function startServer() {
  return {
    status: "server started",
  };
}

/**
 * Get the React component, and frontmatter JSON for a given slug
 * @param slug
 * @returns
 */
export async function getBlog(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "app",
    "content",
    "blog",
    slug + ".mdx"
  );

  const [source] = await Promise.all([readFile(filePath, "utf-8")]);

  const blog = await bundleMDX<Frontmatter>({
    source,
    cwd: process.cwd(),

    esbuildOptions: (options) => {
      // Configuration to allow image loading
      // https://github.com/kentcdodds/mdx-bundler#image-bundling
      options.loader = {
        ...options.loader,
        ".png": "dataurl",
        ".gif": "dataurl",
      };

      return options;
    },
    mdxOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeHighlight,
      ];
      return options;
    },
  });

  return {
    ...blog,
    frontmatter: {
      ...blog.frontmatter,
    },
  };
}

/**
 * Get all frontmatter for all posts
 * @returns
 */
export async function getBlogs(numOfFeatured?: number) {
  const filePath = path.join(process.cwd(), "app", "content", "blog");

  const blogsPath = await readdir(filePath, {
    withFileTypes: true,
  });

  const blogsFeatured =
    numOfFeatured && numOfFeatured <= blogsPath.length
      ? blogsPath.slice(-numOfFeatured)
      : blogsPath;

  const blogs = await Promise.all(
    blogsFeatured.map(async (dirent) => {
      const fPath = path.join(filePath, dirent.name);
      const [file] = await Promise.all([readFile(fPath)]);
      const frontmatter = parseFrontMatter(file.toString());
      const attributes = frontmatter.attributes as Frontmatter;

      return {
        slug: dirent.name.replace(/\.mdx/, ""),
        frontmatter: {
          ...attributes,
        },
      };
    })
  );

  return blogs.reverse();
}
