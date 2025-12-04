import { Post } from "content-collections";
import { PostItem } from "./post-item";

interface YearGroupProps {
  year: number;
  posts: Post[];
}

export const PostYearGroup = ({ year, posts }: YearGroupProps) => {
  return (
    <div className="flex">
      <h2 className="w-12 flex-shrink-0 font-mono text-xs leading-7 opacity-50">
        {year}
      </h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
