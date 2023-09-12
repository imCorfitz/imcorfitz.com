import Image from "next/image";
import Book from "@/public/images/book.png";

export default function WidgetBook() {
  return null;
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="font-aspekta font-[650] text-center mb-3">
        Free E-Book
      </div>
      <div className="text-center">
        <Image
          className="inline-flex rounded-lg shadow-lg rotate-3"
          src={Book}
          width={148}
          height={190}
          alt="Book"
        />
      </div>
    </div>
  );
}
