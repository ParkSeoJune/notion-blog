import Layout from "@/components/layouts";
import RecentPosts from "@/components/pages/recent-posts";
import { fetchBlogData } from "@/services/api/main";

// async function fetchRecentPostsData() {
//   const data = await fetchBlogData({ count: 8 });
//   return data;
// }

export default async function Home() {
  // const data = await fetchRecentPostsData();

  return (
    <Layout>
      {/* <RecentPosts initialData={data} /> */}
      <div>h</div>
    </Layout>
  );
}
