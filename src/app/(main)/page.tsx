"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBlogData } from "@/services/api/main";

import type { Blog } from "@/types/posts";
import Layout from "@/components/layouts";
import CardComponent from "@/components/card";

export default function Home() {
  const { data: blogData } = useQuery({
    queryKey: ["blog"],
    queryFn: () => fetchBlogData(),
  });

  return (
    <Layout>
      <div className="flex gap-4">
        {blogData && blogData.map((data: Blog) => <CardComponent {...data} />)}
      </div>
    </Layout>
  );
}
