"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Selection,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { type Key } from "@react-types/shared";
import times from "lodash/times";

import { fetchBlogData } from "@/services/api/main";
import Layout from "@/components/layouts";
import CardComponent from "@/components/card";
import CardSkeleton from "@/components/card/skeleton";

import type { Blog } from "@/types/posts";

const skeletonData = times(8, (index) => index + 1);

const PostPage = () => {
  const [tag, setTag] = useState<Selection>(new Set(["all"]));
  const [tab, setTab] = useState<Key>("latest");

  const selectedTag = useMemo(
    () => Array.from(tag).join(", ").replaceAll("_", " ").toUpperCase(),
    [tag]
  );

  const { isLoading, data: blogData } = useQuery({
    queryKey: ["all-post", selectedTag, tab],
    queryFn: () =>
      fetchBlogData({
        category: selectedTag.toLowerCase(),
        sortDate: tab as "latest" | "earliest",
      }),
  });

  const handleTagChange = (keys: Selection) => {
    setTag(keys);
  };

  const handleTabChange = (key: Key) => {
    setTab(key);
  };

  return (
    <Layout>
      <section className="flex flex-col items-center px-[8rem]">
        <div className="flex flex-col w-full gap-5 pt-8">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">All Posts</p>
            <div className="flex gap-4">
              <Tabs
                size="sm"
                radius="sm"
                aria-label="Options"
                selectedKey={tab}
                onSelectionChange={handleTabChange}
              >
                <Tab key="latest" title="Latest" />
                <Tab key="earliest" title="Earliest" />
              </Tabs>

              <Dropdown>
                <DropdownTrigger>
                  <Button
                    size="sm"
                    variant="bordered"
                    radius="sm"
                    className="capitalize h-9"
                  >
                    {selectedTag}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={tag}
                  onSelectionChange={handleTagChange}
                >
                  <DropdownItem key="all">All</DropdownItem>
                  <DropdownItem key="til">TIL</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {isLoading &&
              !blogData &&
              skeletonData.map((index) => <CardSkeleton key={index} />)}
            {!isLoading &&
              blogData &&
              blogData.map((data: Blog) => (
                <CardComponent key={data.id} {...data} />
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PostPage;
