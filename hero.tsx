import Image from "next/image";
import HeroImage from "@/public/images/me.jpg";

export default function Hero() {
  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <Image
            className="rounded-full mb-5"
            src={HeroImage}
            width={56}
            height={56}
            priority
            alt="Me"
          />
          <h1 className="h1 font-aspekta mb-5">
            Sharing my journey as a coder and{" "}
            <span className="inline-flex relative text-emerald-500 before:absolute before:inset-0 before:bg-emerald-200 dark:before:bg-emerald-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
              full-time
            </span>{" "}
            maker.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Writer, Speaker, Developer, and Co-Founder of Commit Casa, and a few
            other projects in pipeline. I use my corner of the internet here to
            write about coding, design, startups, and my journey as a full-time
            maker.
          </p>
        </div>
      </div>
    </section>
  );
}
