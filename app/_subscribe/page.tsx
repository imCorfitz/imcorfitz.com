import Image from "next/image";
import WidgetSponsor from "@/components/widget-sponsor";
import WidgetBook from "@/components/widget-book";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Testimonial01 from "@/public/images/testimonial-01.jpg";
import Testimonial02 from "@/public/images/testimonial-02.jpg";

export const metadata = {
  title: "About - Corfitz",
  description: "Page description",
};

export default function Subscribe() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <div className="space-y-10">
            <section>
              {/* Page title */}
              <h1 className="h1 font-aspekta mb-5">Never miss an update ✨</h1>
              {/* Page content */}
              <div className="text-slate-500 dark:text-slate-400 space-y-8">
                <p className="text-lg">
                  This newsletter is written by Mark Ivings, who previously
                  worked at Google, Medium, Vimeo, and Qonto. Here is what to
                  expect by subscribing:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 fill-current text-emerald-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Big tech and high-growth startups, from the inside.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 fill-current text-emerald-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Actionable advice for engineering managers, software
                      engineers and tech workers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 fill-current text-emerald-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      A pulse on the tech market and scoop worth knowing.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 fill-current text-emerald-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>An independent viewpoint.</span>
                  </li>
                </ul>
                <div>
                  {/* Subscribe form */}
                  <form>
                    <div className="flex flex-col md:flex-row justify-center max-w-xs mx-auto md:max-w-md md:mx-0">
                      <input
                        type="email"
                        className="form-input w-full mb-2 md:mb-0 md:mr-2"
                        placeholder="Your email"
                        aria-label="Your email\u2026"
                      />
                      <button className="btn text-white bg-emerald-500 hover:bg-emerald-600">
                        Subscribe
                      </button>
                    </div>
                    {/* Success message */}
                    {/* <p className="text-xs text-slate-500 mt-3 italic">Thanks for subscribing!</p> */}
                  </form>
                  <div className="flex items-center mt-5">
                    <div className="inline-flex -space-x-3 -ml-0.5">
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar01}
                        width={24}
                        height={24}
                        alt="Avatar 01"
                      />
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar02}
                        width={24}
                        height={24}
                        alt="Avatar 02"
                      />
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar03}
                        width={24}
                        height={24}
                        alt="Avatar 03"
                      />
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar04}
                        width={24}
                        height={24}
                        alt="Avatar 04"
                      />
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar05}
                        width={24}
                        height={24}
                        alt="Avatar 05"
                      />
                    </div>
                    <div className="text-sm text-slate-500 ml-3">
                      Join 100K+ developers.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              {/* Cards */}
              <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                <a
                  className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                  href="#0"
                >
                  <div className="flex flex-col h-full">
                    <div className="grow">
                      <Image
                        className="rounded-full mb-2"
                        src={Testimonial01}
                        width={40}
                        height={40}
                        alt="Testimonial 01"
                      />
                      <div className="text-lg font-aspekta font-[650] mb-1">
                        “ Incredible Value “
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        I was able to quickly master the skills necessary to
                        advance my career. I'm grateful for the resources Mark
                        provided and would recommend him to anyone.
                      </p>
                    </div>
                    <div className="text-xs font-aspekta font-[650] text-emerald-500">
                      — Mary Coyle
                    </div>
                  </div>
                </a>
                <a
                  className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                  href="#0"
                >
                  <div className="flex flex-col h-full">
                    <div className="grow">
                      <Image
                        className="rounded-full mb-2"
                        src={Testimonial02}
                        width={40}
                        height={40}
                        alt="Testimonial 02"
                      />
                      <div className="text-lg font-aspekta font-[650] mb-1">
                        “ The Best Newsletter “
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        I was able to quickly master the skills necessary to
                        advance my career. I'm grateful for the resources Mark
                        provided and would recommend him to anyone.
                      </p>
                    </div>
                    <div className="text-xs font-aspekta font-[650] text-emerald-500">
                      — Daniel Burka
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          <WidgetSponsor />
          <WidgetBook />
        </div>
      </aside>
    </div>
  );
}
