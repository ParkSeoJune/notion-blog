import { NextRequest, NextResponse } from "next/server";

import { filterDatabase, retrieveDatabase } from "@/lib/notion";

import type { RequestSearchParam, Row } from "@/types/posts";

export const dynamic = "auto";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const count = searchParams.get("count");
  const category = searchParams.get("category") ?? "all";
  const sortDate = searchParams.get("sortDate") ?? "latest";
  const query = await retrieveDatabase(sortDate);

  const rows = query.results.map((res) => {
    //@ts-ignore
    const { properties, url } = res;
    return {
      ...properties,
      id: res.id,
      tag: properties.tag.multi_select,
      url,
    };
  }) as Row[];

  const reStructed = rows.map((row) => ({
    id: row.id,
    name: row.name.title.reduce(
      (prev, cur) => `${prev}${cur.text.content}`,
      ""
    ),
    tag: row.tag.map((tag) => ({
      id: tag.id,
      name: tag.name,
    })),
    image: row.thumbnail?.rich_text[0]?.text.content || "",
    date: row.date.date.start,
    url: row.url,
  }));

  if (category && typeof category === "string" && category !== "all") {
    return NextResponse.json(
      reStructed.filter(({ tag }) => {
        return tag.map(({ name }) => name).includes(category);
      })
    );
  }

  return NextResponse.json(
    reStructed.slice(0, count != null ? +count : undefined)
  );
}

export async function POST(req: NextRequest) {
  const { searchValue } = (await req.json()) as RequestSearchParam;

  const query = await filterDatabase(searchValue);

  const rows = query.results.map((res) => {
    //@ts-ignore
    const { properties, url } = res;
    return {
      ...properties,
      id: res.id,
      tag: properties.tag.multi_select,
      url,
    };
  }) as Row[];

  const reStructed = rows.map((row) => ({
    id: row.id,
    name: row.name.title.reduce(
      (prev, cur) => `${prev}${cur.text.content}`,
      ""
    ),
    tag: row.tag.map((tag) => ({
      id: tag.id,
      name: tag.name,
    })),
    image: row.thumbnail?.rich_text[0]?.text.content || "",
    date: row.date.date.start,
    url: row.url,
  }));

  return NextResponse.json(reStructed);
}
