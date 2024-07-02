import { RequestPostsParams } from "@/types/posts";

export const fetchBlogData = async ({
  count = 20,
}: RequestPostsParams = {}) => {
  const res = await fetch(`/api/posts?count=${count}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data } = await res.json();

  return data;
};
