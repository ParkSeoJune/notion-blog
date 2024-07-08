import qs from "qs";

import type {
  Blog,
  RequestPostsParams,
  RequestSearchParam,
} from "@/types/posts";

export const fetchBlogData = async ({
  count,
  category,
  sortDate,
}: RequestPostsParams = {}) => {
  const queryString = qs.stringify(
    {
      count,
      category,
      sortDate,
    },
    { skipNulls: true }
  );

  const res = await fetch(
    `https://notion-blog-git-develop-parkseojunes-projects.vercel.app/api/posts?${queryString}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = (await res.json()) as Blog[];

  return data;
};

export const searchBlogData = async ({ searchValue }: RequestSearchParam) => {
  const body = { searchValue };

  const res = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = (await res.json()) as Blog[];

  return data;
};
