import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";

const notionDatabase = process.env.NOTION_DATABASE_ID;
const notionSecret = process.env.NOTION_SECRET;

export const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export const retrieveDatabase = async (sortDate: string) => {
  if (!notionDatabase || !notionSecret) {
    throw new Error("Missing notion secret or DB ID");
  }

  const query = await notion.databases.query({
    database_id: notionDatabase,
    sorts: [
      {
        property: "date",
        direction: sortDate === "latest" ? "descending" : "ascending",
      },
    ],
  });
  return query;
};

export const notionApi = new NotionAPI();

export const getNotionPage = async (id: string) => {
  const data = await notionApi.getPage(id);
  return data;
};
