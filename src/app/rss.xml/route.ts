import RSS from "rss";
import NotionPageToHtml from "notion-page-to-html";

import { fetchBlogData } from "@/services/api/main";
import type { Blog } from "@/types/posts";
import removeMarkdown from "markdown-to-text";

const baseUrl = "https://www.jhintechblog.xyz/";

const genereateRssXml = async () => {
  try {
    const posts = await fetchBlogData();
    const feed = new RSS({
      title: "Jhin Devlog",
      description: "Jhin Devlog",
      site_url: baseUrl,
      feed_url: `${baseUrl}/rss.xml`,
    });

    const convertedPosts = await Promise.all(
      posts.map(async (post: Blog) => {
        const { html } = await NotionPageToHtml.convert(post.url, {
          bodyContentOnly: true,
        });
        const description = removeMarkdown(html);

        return {
          title: post.name,
          url: `${baseUrl}/post/${post.id}`,
          date: post.date,
          image: post.image,
          description,
          content: html,
          categories: post.tag?.map((data) => data.name),
        };
      })
    );

    convertedPosts.forEach(({ title, url, date, description, categories }) => {
      feed.item({
        title,
        description: `${description.slice(0, 100)}...`,
        url,
        date,
        categories,
        custom_elements: [
          {
            "content:encoded": description,
          },
        ],
      });
    });

    return feed.xml({ indent: true });
  } catch (error) {
    console.log("Error generating RSS feed:", error);
    return null;
  }
};

export async function GET() {
  const feedXml = await genereateRssXml();

  if (feedXml) {
    return new Response(feedXml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } else {
    return new Response("Error generating RSS feed.", { status: 500 });
  }
}
