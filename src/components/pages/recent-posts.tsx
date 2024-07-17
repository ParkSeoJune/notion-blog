import { Image, Link } from "@nextui-org/react";

import CardComponent from "@/components/card";
import VisitorCount from "@/components/visitor-count";
import { cn } from "@/lib/utils";

import type { Blog } from "@/types/posts";

type Props = {
  initialData: Blog[];
};

const RecentPosts = ({ initialData }: Props) => (
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
        src="https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F6324545%2Fattach%2Fa1a2e40b390045868b6552fbb2803812"
        alt="main-image"
        className={cn("w-[12.5rem] p-2 m-5", "xs:w-[15rem] sm:p-0")}
      />
      <div className={cn("flex flex-col gap-2", "sm:gap-3")}>
        <p className={cn("text-xl font-bold", "sm:text-2xl")}>Devlog</p>
        <p className={cn("text-sm")}>
          안녕하세요! <br /> Frontend Developer 박서준입니다
        </p>
        <VisitorCount />
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
        {initialData &&
          initialData.map((data: Blog) => (
            <CardComponent key={data.id} {...data} />
          ))}
      </div>
    </div>
  </section>
);

export default RecentPosts;
