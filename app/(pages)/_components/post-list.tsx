import { Post } from "content-collections";
import { PostYearGroup } from "./post-year-group";

interface PostsProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostsProps) => {
  // Group posts into years
  const postsByYear = posts.reduce(
    (acc, post) => {
      const year = new Date(post.publishedAt).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    },
    {} as Record<number, Post[]>,
  );

  return (
    <div>
      {Object.entries(postsByYear)
        .sort(([a], [b]) => (parseInt(a) > parseInt(b) ? -1 : 1))
        .map(([year, posts]) => (
          <PostYearGroup key={year} year={parseInt(year)} posts={posts} />
        ))}
    </div>
  );
};
