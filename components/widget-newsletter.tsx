import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";

export default function WidgetNewsletter() {
  return null;
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="text-center mb-1">
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
      </div>
      <div className="text-center mb-8">
        <div className="font-aspekta font-[650] mb-1">
          Never miss an update!
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Subscribe and join 100K+ developers.
        </p>
      </div>
      <form>
        <div className="mb-2">
          <label className="sr-only" htmlFor="newsletter">
            Your email…
          </label>
          <input
            id="newsletter"
            type="email"
            className="form-input py-1 w-full"
            placeholder="Your email…"
          />
        </div>
        <button
          className="btn-sm w-full  text-slate-100 bg-emerald-500 hover:bg-emerald-600"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
