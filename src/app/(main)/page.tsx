import { type Metadata } from "next";

import Layout from "@/components/layouts";
import RecentPosts from "@/components/pages/recent-posts";
import { fetchBlogData } from "@/services/api/main";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: "https://notion-blog-parkseojunes-projects.vercel.app/",
  },
  openGraph: {
    title: "Home",
  },
};

async function fetchRecentPostsData() {
  const data = await fetchBlogData({ count: 8 });
  return data;
}

export default async function Home() {
  const data = await fetchRecentPostsData();

  return (
    <Layout>
      <RecentPosts initialData={data} />
    </Layout>
  );
}
