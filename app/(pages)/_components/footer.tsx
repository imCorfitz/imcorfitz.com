export const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center pb-16 pt-20 font-mono md:pt-40">
      <p className="text-primary/50 text-xs font-light">
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          className="cursor-help"
        >
          CC BY-NC 4.0
        </abbr>{" "}
        {new Date().getFullYear()} © Corfitz (
        <a
          href="https://twitter.com/imCorfitz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          @imCorfitz
        </a>
        )
      </p>
      <a
        href="https://github.com/imCorfitz/imcorfitz.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto border-b border-dotted text-xs"
      >
        Source
      </a>
    </footer>
  );
};
