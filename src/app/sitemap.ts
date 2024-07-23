import { fetchBlogData } from "@/services/api/main";
import type { Blog } from "@/types/posts";

export default async function sitemap() {
  const baseUrl = "https://www.jhintechblog.xyz";
  const posts = await fetchBlogData();
  const postSitemaps = posts.map((post: Blog) => {
    return {
      url: `${baseUrl}/post/${post.id}`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "daily",
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/post`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "daily",
    },
    ...postSitemaps,
  ];
}
