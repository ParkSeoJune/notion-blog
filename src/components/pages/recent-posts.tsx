"use client";

import { useQuery } from "@tanstack/react-query";
import { Image, Link } from "@nextui-org/react";
import times from "lodash/times";

import { fetchBlogData } from "@/services/api/main";
import CardComponent from "@/components/card";
import CardSkeleton from "@/components/card/skeleton";
import { cn } from "@/lib/utils";

import type { Blog } from "@/types/posts";

type Props = {
  initialData: Blog[];
};

const skeletonData = times(8, (index) => index + 1);

const RecentPosts = ({ initialData }: Props) => {
  // const { isLoading, data: blogData } = useQuery({
  //   queryKey: ["blog"],
  //   queryFn: () => fetchBlogData({ count: 8 }),
  //   initialData: initialData,
  // });

  return (
    <section
      className={cn(
        "flex flex-col items-center w-screen max-w-[1440px] gap-4 px-5",
        "xs:gap-6 xs:px-8 sm:px-16 lg:px-[5rem]"
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-center items-center gap-3 w-full py-8",
          "xs:flex-row xs:gap-[3rem]",
          "sm:gap-20 sm:py-[4rem]"
        )}
      >
        <Image
          isBlurred
          width={240}
          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          alt="NextUI Album Cover"
          className={cn("w-[12.5rem] p-2 m-5", "xs:w-[15rem] sm:p-0")}
        />
        <div className={cn("flex flex-col gap-2", "sm:gap-3")}>
          <p className={cn("text-xl font-bold", "sm:text-2xl")}>Devlog</p>
          <p className={cn("text-sm")}>
            안녕하세요! <br /> Frontend Developer{" "}
            <br className="hidden sm:block" /> 박서준입니다
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-5">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-md sm:text-lg">Recent Posts</p>
          <Link href="/post" className="text-md sm:text-lg">
            Show All
          </Link>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 w-full gap-4",
            "xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          )}
        >
          {/* {isLoading &&
            !blogData &&
            skeletonData.map((index) => <CardSkeleton key={index} />)}
          {!isLoading &&
            blogData &&
            blogData.map((data: Blog) => (
              <CardComponent key={data.id} {...data} />
            ))} */}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
