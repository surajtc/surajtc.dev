/** @type {import('@remix-run/dev').AppConfig} */

export default {
  ignoredRouteFiles: ["**/.*"],
  mdx: async () => {
    const [rehypeHighlight] = await Promise.all([
      import("rehype-highlight").then((mod) => mod.default),
    ]);

    return {
      rehypePlugins: [rehypeHighlight],
    };
  },
};
