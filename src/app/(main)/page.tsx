"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBlogData } from "@/services/api/main";

import type { BlogList } from "@/types/posts";
import Layout from "@/components/layouts";

export default function Home() {
  const { data: blogData } = useQuery({
    queryKey: ["blog"],
    queryFn: () => fetchBlogData(),
  });

  return (
    <Layout>
      <div>
        {blogData &&
          blogData.map((data: BlogList) => (
            <div key={data.id}>{data.name}</div>
          ))}
      </div>
    </Layout>
  );
}
