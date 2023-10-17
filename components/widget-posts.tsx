import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default async function WidgetPosts() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-href-t dark:from-slate-800 dark:href-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="font-aspekta font-[650] mb-3">Popular Posts</div>
      <ul className="space-y-3">
        {allPosts.slice(0, 5).map((post, postIndex) => (
          <li className="inline-flex" key={postIndex}>
            <span className="text-emerald-500 mr-2">—</span>{" "}
            <Link
              className="font-aspekta font-[650] text-sm inline-flex relative hover:text-emerald-500 duration-150 ease-out before:scale-x-0 before:origin-center before:absolute before:inset-0 before:bg-emerald-200 dark:before:bg-emerald-500 before:opacity-30 before:-z-10 before:translate-y-1/4 before:-rotate-2 hover:before:scale-100 before:duration-150 before:ease-in-out"
              href={`/posts/${post.slug}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
