import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import rehypeUnwrapImages from "rehype-unwrap-images";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string(),
    image: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      cwd: process.cwd(),
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeUnwrapImages,
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "aurora-x",
            onVisitLine(node: any) {
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
            onVisitHighlightedLine(node: any) {
              const nodeClass = node.properties.className;
              if (nodeClass && nodeClass.length > 0) {
                node.properties.className.push("line--highlighted");
              } else {
                node.properties.className = ["line--highlighted"];
              }
            },
            onVisitHighlightedWord(node: any) {
              node.properties.className = ["word--highlighted"];
            },
          },
        ],
      ],
    });

    return {
      ...document,
      mdx,
      slug: document._meta.path,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
