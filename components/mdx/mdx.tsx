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
    <div className="text-primary/80 prose-headings:text-primary prose-a:text-primary prose-strong:text-primary/90 prose-code:text-primary prose max-w-none prose-p:leading-relaxed prose-a:border-b prose-a:border-dotted prose-a:no-underline prose-a:transition-opacity hover:prose-a:opacity-80 prose-blockquote:text-inherit prose-strong:font-medium prose-pre:bg-slate-800 prose-img:rounded-lg">
      <Component components={{ ...mdxComponents }} />
    </div>
  );
}
