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
import { cn } from "@/lib/utils";

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
      <section
        className={cn(
          "flex flex-col items-center w-screen max-w-[1440px] px-5",
          "xs:gap-6 xs:px-8 sm:px-16 lg:px-[5rem]"
        )}
      >
        <div className={cn("flex flex-col w-full gap-3 pt-8", "xs:gap-5")}>
          <div
            className={cn(
              "flex flex-col gap-5",
              "xs:flex-row xs:justify-between xs:items-center xs:gap-0"
            )}
          >
            <p className="pl-1 font-semibold text-lg text-gray-200">
              All Posts
            </p>
            <div
              className={cn(
                "flex justify-between w-full",
                "xs:w-fit xs:gap-4 xs:justify-normal"
              )}
            >
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
          <div
            className={cn(
              "grid grid-cols-1 w-full gap-4",
              "xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            )}
          >
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
