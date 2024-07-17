import { type Metadata } from "next";

import Layout from "@/components/layouts";
import AllPosts from "@/components/pages/all-posts";
import { fetchBlogData } from "@/services/api/main";

export const metadata: Metadata = {
  title: "Posts",
  alternates: {
    canonical: "https://notion-blog-parkseojunes-projects.vercel.app/post",
  },
  openGraph: {
    title: "Posts",
  },
};

async function fetchRecentPostsData() {
  const data = await fetchBlogData();
  return data;
}

const PostPage = async () => {
  const data = await fetchRecentPostsData();

  return (
    <Layout>
      <AllPosts initialData={data} />
    </Layout>
  );
};

export default PostPage;
