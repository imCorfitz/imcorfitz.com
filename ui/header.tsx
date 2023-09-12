import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return <div className="h-16"></div>;
  return (
    <header>
      <div className="flex items-center justify-between h-16 before:block">
        <div className="grow flex justify-end space-x-4">
          {/* Search form */}
          <form className="w-full max-w-[276px]">
            <div className="flex flex-wrap">
              <div className="w-full">
                <label className="block text-sm sr-only" htmlFor="search">
                  Search
                </label>
                <div className="relative flex items-center">
                  <input
                    id="search"
                    type="search"
                    className="form-input py-1 w-full pl-10"
                  />
                  <div className="absolute inset-0 right-auto flex items-center justify-center">
                    <svg
                      className="w-4 h-4 shrink-0 mx-3"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-slate-400"
                        d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Light switch */}
          <ThemeToggle />

          {/* Button */}
          <div>
            <Link
              className="btn-sm text-slate-100 bg-emerald-500 hover:bg-emerald-600"
              href="/subscribe"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
