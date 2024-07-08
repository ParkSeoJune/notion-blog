"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { type ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

import "@/components/notion/style.css";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

const Code = dynamic(
  () => import("react-notion-x/build/third-party/code").then((m) => m.Code),
  { ssr: false }
);
const Collection = dynamic(
  () =>
    import("react-notion-x/build/third-party/collection").then(
      (m) => m.Collection
    ),
  {
    ssr: false,
  }
);

interface RendererProps {
  title: string;
  recordMap: ExtendedRecordMap;
  rootPageId: string;
}

export const ResumeDetail = ({
  title,
  recordMap,
  rootPageId,
}: RendererProps) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto mt-5 py-4 gap-2">
      <h1 className="w-full max-w-[720px] text-3xl px-4">
        <b>{title}</b>
      </h1>
      <NotionRenderer
        recordMap={recordMap}
        darkMode
        rootPageId={rootPageId}
        components={{
          Collection,
          Code,
          nextImage: Image,
        }}
        disableHeader
        previewImages
      />
    </div>
  );
};

export default ResumeDetail;
