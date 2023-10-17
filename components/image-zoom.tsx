"use client";

import Zoom from "react-medium-image-zoom";

type Props = {
  children: React.ReactNode;
};

export default function ImageZoom({ children }: Props) {
  return <Zoom classDialog="ic-image-zoom">{children}</Zoom>;
}
