export default function FaeturedProjects() {
  return (
    <section>
      <h2 className="font-aspekta text-xl font-[650] mb-5">
        Open-Source Projects
      </h2>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
        <a
          className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
          href="#0"
        >
          <div className="flex flex-col h-full">
            <div className="grow">
              <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path
                    fill="#34D399"
                    fillRule="evenodd"
                    d="M9.97 14.758c-.018 1.796-.497 3.248-1.072 3.242-.574-.006-1.026-1.466-1.008-3.262.017-1.796.497-3.247 1.071-3.242.575.006 1.026 1.466 1.009 3.262Zm-3.332-.408c-.977 1.502-2.16 2.461-2.64 2.143-.48-.318-.076-1.793.902-3.294.977-1.501 2.159-2.46 2.64-2.143.48.318.076 1.793-.902 3.294Zm-2.587-2.154c-1.628.73-3.137.893-3.37.364-.233-.53.897-1.55 2.524-2.28 1.628-.73 3.136-.893 3.37-.363.233.529-.897 1.55-2.524 2.28Zm2.328-3.764c-.087.573-1.585.815-3.346.542-1.76-.273-3.116-.959-3.029-1.531.087-.573 1.585-.815 3.346-.542 1.76.273 3.117.959 3.03 1.531Zm.632-1.363c-.38.434-1.77-.179-3.105-1.368C2.57 4.51 1.798 3.195 2.178 2.76c.38-.434 1.77.179 3.106 1.368C6.618 5.32 7.392 6.635 7.01 7.07Zm1.26-.797c-.554.157-1.395-1.116-1.88-2.844C5.906 1.7 5.961.17 6.514.013c.553-.158 1.394 1.116 1.879 2.844.485 1.728.43 3.257-.123 3.415Zm3.417-2.79C11.17 5.2 10.304 6.456 9.754 6.287c-.55-.168-.575-1.698-.056-3.416.519-1.718 1.385-2.974 1.934-2.806.55.169.575 1.698.056 3.417Zm2.443 2.321c-1.358 1.163-2.76 1.748-3.132 1.307-.372-.442.427-1.742 1.785-2.905 1.357-1.163 2.76-1.748 3.131-1.306.372.441-.427 1.742-1.784 2.904Zm.807 3.286c-1.765.238-3.258-.034-3.334-.608-.077-.575 1.293-1.233 3.058-1.471 1.766-.238 3.259.034 3.335.608.076.574-1.293 1.233-3.059 1.47Zm2.278 3.635c-.244.525-1.75.332-3.362-.43-1.613-.762-2.723-1.806-2.48-2.33.245-.525 1.75-.332 3.363.43s2.722 1.806 2.479 2.33Zm-3.393 3.87c-.486.308-1.65-.674-2.597-2.195-.948-1.52-1.323-3.003-.836-3.311.486-.308 1.649.674 2.597 2.195.948 1.52 1.322 3.003.836 3.31Z"
                  />
                </svg>
              </div>
              <div className="text-lg font-aspekta font-[650] mb-1">
                Awesome Container Tinkering
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                Solutions for running containers locally and remotely.
              </p>
            </div>
            <div className="text-emerald-500 flex justify-end">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
              >
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
              </svg>
            </div>
          </div>
        </a>
        <a
          className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
          href="#0"
        >
          <div className="flex flex-col h-full">
            <div className="grow">
              <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path
                    fill="#8B5CF6"
                    fillRule="evenodd"
                    d="M3.849 1.619a9.052 9.052 0 0 0-1.732 1.582c2.066-.192 4.69.12 7.735 1.644 3.253 1.626 5.873 1.681 7.696 1.33a8.95 8.95 0 0 0-.62-1.44c-2.087.22-4.763-.071-7.88-1.63-1.98-.99-3.726-1.398-5.2-1.486ZM15.709 3A8.977 8.977 0 0 0 9 0c-.783 0-1.542.1-2.266.288.98.267 2.022.659 3.118 1.207C12.135 2.636 14.106 3.004 15.708 3Zm2.228 4.933c-2.202.435-5.243.345-8.89-1.478C5.639 4.75 2.926 4.772 1.096 5.179a9.117 9.117 0 0 0-.276.066A8.933 8.933 0 0 0 .25 6.883c.146-.04.298-.077.454-.112 2.22-.493 5.357-.472 9.147 1.424 3.41 1.704 6.123 1.683 7.953 1.276l.185-.043a9.133 9.133 0 0 0-.053-1.495Zm-.24 3.395c-2.182.38-5.134.234-8.65-1.523C5.639 8.1 2.926 8.122 1.096 8.529c-.406.09-.771.2-1.094.316L0 9a9 9 0 0 0 17.696 2.328Z"
                  />
                </svg>
              </div>
              <div className="text-lg font-aspekta font-[650] mb-1">
                Engine Prototypes
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                Solutions for running containers locally and remotely.
              </p>
            </div>
            <div className="text-emerald-500 flex justify-end">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
              >
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
