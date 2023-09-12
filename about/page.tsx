import Image from "next/image";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";
import AboutImg from "@/public/images/about.png";
import Experience from "@/components/experience";

export const metadata = {
  title: "About - Corfitz",
  description: "Page description",
};

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-5">
              Hi.{" "}
              <span className="inline-flex relative text-emerald-500 before:absolute before:inset-0 before:bg-emerald-200 dark:before:bg-emerald-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
                @ImCorfitz
              </span>{" "}
              👋
            </h1>
            <Image
              className="w-full"
              src={AboutImg}
              width={692}
              height={390}
              alt="About"
            />
            {/* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-8">
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Short Bio
                </h2>
                <p>
                  <em>Queue the epic music...</em>
                </p>
                <p>
                  With over a decade of software sorcery under my belt, I've
                  navigated through a colorful array of digital landscapes. My
                  journey in the tech realm has encompassed a wide spectrum of
                  skills and domains. From shaping captivating user interfaces
                  in the front-end to architecting robust backend services, I've
                  relished the art of bringing concepts to life through code.
                </p>
                <p>
                  Through this journey, I've found my passion for
                  problem-solving illuminated by the avenue of software
                  development, allowing me to create elegant solutions that
                  tackle intricate challenges head-on.
                </p>
                <p>
                  While there isn't a Wikipedia page about me yet (sorry
                  folks!), a media bio is available below.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Career
                </h2>
                <p>
                  In my day job, I find myself as part of the talented team at{" "}
                  <a
                    className="font-medium text-emerald-500 hover:underline"
                    href="https://amigopartnership.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amigo Partnership
                  </a>
                  , a digital agency dedicated to crafting tailor-made solutions
                  for a diverse portfolio of clients.
                </p>
                <p>
                  My days are filled with weaving digital threads into bespoke
                  deliverables that cater to the unique needs of each client's
                  vision. <b>Leading the internal dev team</b>, I have the
                  privilege of concocting novel features, meticulously refining
                  performance, and shaping innovative solutions. It's a bit like
                  orchestrating a tech symphony!
                </p>
                <p>
                  Beyond hanging out with <em>mis Amigos</em>, I'm the CTO at{" "}
                  <a
                    className="font-medium text-emerald-500 hover:underline"
                    href="https://commit.casa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Commit Casa
                  </a>
                  , cooking up stuff with a brilliant tech squad that's
                  dedicated to making products and services not just cool, but
                  Fort Knox-level secure and bullet-train performant. Serving
                  agencies as an integrated (but remote) white-labelled dev hub.
                </p>
              </div>

              <Experience />

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Let's Connect
                </h2>
                <p>
                  If you're up for a virtual chat, I'm just a{" "}
                  <a
                    className="font-medium text-emerald-500 hover:underline"
                    href="https://twitter.com/imcorfitz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tweet
                  </a>{" "}
                  or an{" "}
                  <a
                    className="font-medium text-emerald-500 hover:underline"
                    href="mailto:hi@imcorfitz.com"
                    rel="noopener noreferrer"
                  >
                    email
                  </a>{" "}
                  away. Let's geek out about projects, share a chuckle over tech
                  mishaps, or brainstorm ideas that might just change the world
                  – one line of code at a time. While freelance quests aren't on
                  my plate right now, I'm all ears for exciting opportunities
                  that align with my digital adventures.
                </p>
                <p>
                  Remember, technology is a journey, and I'm on the lookout for
                  kindred spirits to join me on this remarkable ride. Stay
                  curious and keep coding!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          <WidgetNewsletter />
          <WidgetSponsor />
        </div>
      </aside>
    </div>
  );
}
