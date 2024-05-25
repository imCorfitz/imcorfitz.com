import { Post } from "@/.contentlayer/generated";
import Link from "next/link";

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="group mb-4 border-b border-zinc-700 pb-4">
        <h2 className="mb-2 text-lg font-semibold transition-colors group-hover:text-zinc-200/80">
          {post.title}
        </h2>
        <p className="text-zinc-500">{post.summary}</p>
      </article>
    </Link>
  );
};
