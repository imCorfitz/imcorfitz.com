import { useMDXComponent } from "next-contentlayer/hooks";
import ImageZoom from "@/components/image-zoom";

function MyImg(props: any) {
  if (props.title !== undefined) {
    return (
      <figure className="flex flex-col items-center">
        <ImageZoom>
          <img src={props.src} alt={props.alt} />
        </ImageZoom>
        <figcaption dangerouslySetInnerHTML={{ __html: props.title }} />
      </figure>
    );
  } else {
    return (
      <ImageZoom>
        <img className="mx-auto" src={props.src} alt={props.alt} />
      </ImageZoom>
    );
  }
}

const mdxComponents = {
  img: MyImg,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose max-w-none text-zinc-200/80 prose-headings:text-zinc-200 prose-p:leading-relaxed prose-a:border-b prose-a:border-dotted prose-a:text-zinc-200 prose-a:no-underline prose-a:transition-colors hover:prose-a:text-zinc-200/80 prose-blockquote:text-inherit prose-strong:font-medium prose-strong:text-zinc-300 prose-code:text-zinc-200 prose-pre:bg-slate-800 prose-img:rounded-lg">
      <Component components={{ ...mdxComponents }} />
    </div>
  );
}
