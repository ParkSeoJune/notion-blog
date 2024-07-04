"use client";

import { useQuery } from "@tanstack/react-query";
import { Image, Link } from "@nextui-org/react";
import times from "lodash/times";

import { fetchBlogData } from "@/services/api/main";
import Layout from "@/components/layouts";
import CardComponent from "@/components/card";
import CardSkeleton from "@/components/card/skeleton";

import type { Blog } from "@/types/posts";

const skeletonData = times(8, (index) => index + 1);

export default function Home() {
  const { isLoading, data: blogData } = useQuery({
    queryKey: ["blog"],
    queryFn: () => fetchBlogData({ count: 8 }),
  });

  return (
    <Layout>
      <section className="flex flex-col items-center gap-6 px-[8rem]">
        <div className="flex justify-center items-center gap-20 w-full py-[4rem]">
          <Image
            isBlurred
            width={240}
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            alt="NextUI Album Cover"
            className="m-5"
          />
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-bold">Blog</p>
            <p>
              안녕하세요! <br /> Frontend Developer <br /> 박서준입니다
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">Recent Posts</p>
            <Link href="/post">Show All</Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {isLoading &&
              !blogData &&
              skeletonData.map((index) => <CardSkeleton key={index} />)}
            {!isLoading &&
              blogData &&
              blogData.map((data: Blog) => <CardComponent {...data} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
}
