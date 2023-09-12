import { allPosts } from "contentlayer/generated";
import Hero from "@/components/hero";
import PostItem from "./post-item";
import Talks from "@/components/talks";
import FeaturedProjects from "@/components/featured-projects";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";
import WidgetBook from "@/components/widget-book";

export const metadata = {
  title: "Home - Corfitz",
  description: "Page description",
};

export default async function Home() {
  // Sort posts by date
  allPosts.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  return (
    <>
      <Hero />
      {/* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
        {/* Middle area */}
        <div className="grow">
          <div className="max-w-[700px]">
            <div className="space-y-10">
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-3">
                  Latest Articles
                </h2>

                {/* Filters */}
                {/* <ul className="flex flex-wrap text-sm border-b border-slate-100 dark:border-slate-800">
                  <li className="px-3 -mb-px">
                    <a
                      className="block py-3 font-medium text-slate-800 dark:text-slate-100 border-b-2 border-emerald-500"
                      href="#0"
                    >
                      Coding
                    </a>
                  </li>
                  <li className="px-3 -mb-px">
                    <a
                      className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                      href="#0"
                    >
                      Startups
                    </a>
                  </li>
                  <li className="px-3 -mb-px">
                    <a
                      className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                      href="#0"
                    >
                      Tutorials
                    </a>
                  </li>
                  <li className="px-3 -mb-px">
                    <a
                      className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                      href="#0"
                    >
                      Indie Hacking
                    </a>
                  </li>
                </ul> */}

                {/* Articles list */}
                <div>
                  {allPosts.map((post, postIndex) => (
                    <PostItem key={postIndex} {...post} />
                  ))}
                </div>
              </section>

              {/* <Talks />
              <FeaturedProjects /> */}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        {/* <aside className="md:w-[240px] lg:w-[300px] shrink-0">
          <div className="space-y-6">
            <WidgetNewsletter />
            <WidgetSponsor />
            <WidgetBook />
          </div>
        </aside> */}
      </div>
    </>
  );
}
