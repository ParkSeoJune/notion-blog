import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://www.jhintechblog.xyz/sitemap.xml",
      "https://jhintechblog.xyz/sitemap.xml",
    ],
  };
}
