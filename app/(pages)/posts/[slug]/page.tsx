import Link from "next/link";
import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx/mdx";
import PostDate from "@/components/post-date";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return;

  const { title, summary: description } = post;

  return {
    title,
    description,
  };
}

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <article>
      <header>
        <h1 className="text-2xl font-medium">{post.title}</h1>

        <div className="mb-10 mt-2 flex items-center gap-4 font-mono text-sm text-zinc-500">
          <div>
            <a
              href="https://twitter.com/imcorfitz"
              className="transition-colors hover:text-zinc-200/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              @imCorfitz
            </a>{" "}
            <span className="px-2">|</span>{" "}
            <PostDate dateString={post.publishedAt} />{" "}
          </div>
          <Link
            href="/"
            className="ml-auto border-b border-dotted text-zinc-200 transition-colors hover:text-zinc-200/80"
          >
            Back
          </Link>
        </div>
      </header>
      <Mdx code={post.body.code} />
    </article>
  );
}
