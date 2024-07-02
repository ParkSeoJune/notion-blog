"use client";

import { fetchBlogData } from "@/services/api/main";
import { useQuery } from "@tanstack/react-query";

export default async function Home() {
  const { data: blogData } = useQuery({
    queryKey: ["blog"],
    queryFn: () => fetchBlogData(),
  });

  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
