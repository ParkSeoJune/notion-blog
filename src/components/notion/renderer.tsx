"use client";

import Link from "next/link";
import { NotionRenderer } from "react-notion-x";

interface RendererProps {
  recordMap: any; // 임의로 any
  rootPageId: string;
}

export const Renderer = ({ recordMap, rootPageId }: RendererProps) => {
  return (
    <div className="notion__container">
      <Link href="/">뒤로가기</Link>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
        previewImages
      />
    </div>
  );
};

export default Renderer;
