import { Post } from "@/.contentlayer/generated";
import Link from "next/link";

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="border-primary/15 group mb-4 border-b pb-4">
        <h2 className="mb-2 text-lg font-semibold transition-opacity group-hover:opacity-80">
          {post.title}
        </h2>
        <p className="opacity-50">{post.summary}</p>
      </article>
    </Link>
  );
};
