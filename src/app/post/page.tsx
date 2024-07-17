import { type Metadata } from "next";

import Layout from "@/components/layouts";
import AllPosts from "@/components/pages/all-posts";

export const metadata: Metadata = {
  title: "Posts",
  alternates: {
    canonical: "https://notion-blog-parkseojunes-projects.vercel.app/post",
  },
  openGraph: {
    title: "Posts",
  },
};

const PostPage = async () => {
  return (
    <Layout>
      <AllPosts />
    </Layout>
  );
};

export default PostPage;
