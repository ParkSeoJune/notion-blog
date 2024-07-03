"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBlogData } from "@/services/api/main";

import type { BlogList } from "@/types/posts";

export default function Home() {
  const { data: blogData } = useQuery({
    queryKey: ["blog"],
    queryFn: () => fetchBlogData(),
  });

  return (
    <div>
      {blogData &&
        blogData.map((data: BlogList) => <div key={data.id}>{data.name}</div>)}
    </div>
  );
}
