import * as Notions from "notion-types";

export type RequestPostsParams = {
  count?: number;
  category?: string;
  sortDate?: "latest" | "earliest";
};

export type RequestSearchParam = {
  searchValue: string;
};

export type Row = {
  date: {
    id: string;
    type: Notions.PropertyType;
    date: {
      start: string;
      end?: string;
      time_zone: string;
    };
  };
  tag: { id: string; name: string; color: Notions.Color }[];
  thumbnail?: {
    id: string;
    type: "rich_text";
    rich_text: [
      {
        text: {
          content: string;
          url: string;
        };
      }
    ];
  };
  name: {
    id: string;
    type: Notions.PropertyType;
    title: {
      type: Notions.PropertyType;
      text: { content: string; link?: string };
      annotations: Notions.Decoration;
      plain_text: string;
      href?: string;
    }[];
  };
  id: string;
  url: string;
};

export type Blog = {
  id: string;
  name: string;
  tag?: {
    id: string;
    name: string;
  }[];
  image?: string;
  date: string;
  url: string;
};
