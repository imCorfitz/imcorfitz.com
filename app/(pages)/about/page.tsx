import Corfitz from "@/public/images/corfitz.jpg";
import Image from "next/image";
import Link from "next/link";

// ------------------------------------------------------------------

interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
}

const InlineLink = ({ href, children }: InlineLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary border-b border-dotted transition-opacity hover:opacity-80"
  >
    {children}
  </a>
);

// ------------------------------------------------------------------

export default function About() {
  return (
    <div>
      <Image
        src={Corfitz}
        alt="Corfitz"
        width={100}
        height={100}
        className="rounded-full"
      />
      <article className="mt-6 space-y-4">
        <h1 className="font-semibold">
          Hi,{" "}
          <InlineLink href="https://twitter.com/imcorfitz">
            @imCorfitz
          </InlineLink>
          !
        </h1>
        <p className="text-primary/80">
          I am a developer with an interest in design, currently residing in
          Valencia. I have the honour of working at{" "}
          <InlineLink href="https://www.amigopartnership.com/">
            Amigo Partnership
          </InlineLink>
          , a creative agency based in London. My professional journey is driven
          by a passion for combining development and design to create innovative
          and engaging solutions.
        </p>
        <p className="text-primary/80">
          Since my early years, I have dedicated considerable time to refining
          my skills in both coding and design. This dedication has allowed me to
          develop a unique perspective that enhances my work in software
          development and creative projects.
        </p>
        <p className="text-primary/80">
          For more information about my professional journey and interests, feel
          free to explore my{" "}
          <Link
            className="text-primary border-b border-dotted transition-opacity hover:opacity-80"
            href="/"
          >
            written works
          </Link>
          ,{" "}
          <InlineLink href="https://github.com/imcorfitz">projects</InlineLink>,
          and various social media profiles.
        </p>
      </article>
    </div>
  );
}
