import { useMDXComponent } from "next-contentlayer/hooks";
import ImageZoom from "../image-zoom";

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
    <div className="prose prose-img:rounded-lg text-slate-500 dark:text-slate-400 max-w-none prose-p:leading-normal prose-blockquote:text-inherit prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:font-medium prose-a:text-emerald-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-pre:bg-slate-800 dark:prose-code:text-slate-200">
      <Component components={{ ...mdxComponents }} />
    </div>
  );
}
