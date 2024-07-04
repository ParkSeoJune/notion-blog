import qs from "qs";

import type { RequestPostsParams } from "@/types/posts";

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

  const res = await fetch(`/api/posts?${queryString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return data;
};
