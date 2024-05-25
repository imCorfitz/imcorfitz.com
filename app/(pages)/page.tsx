import { allPosts } from "contentlayer/generated";
import { PostList } from "./_components/post-list";

export default function Home() {
  // Sort posts by date
  allPosts.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  return <PostList posts={allPosts} />;
}
