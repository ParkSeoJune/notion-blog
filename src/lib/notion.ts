import { Client } from "@notionhq/client";

const notionDatabase = process.env.NOTION_DATABASE_ID;
const notionSecret = process.env.NOTION_SECRET;

export const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export const retrieveDatabase = async () => {
  if (!notionDatabase || !notionSecret) {
    throw new Error("Missing notion secret or DB ID");
  }

  const query = await notion.databases.query({
    database_id: notionDatabase,
  });
  return query;
};
