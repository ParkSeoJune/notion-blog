import { type ChangeEvent, useEffect, useState } from "react";
import { useDebounce, useMedia } from "react-use";
import {
  Button,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";

import { SearchIcon } from "@/assets/icons/search";
import { cn } from "@/lib/utils";
import { fetchBlogData, searchBlogData } from "@/services/api/main";

import { type Blog } from "@/types/posts";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SearchModal = ({ isOpen, onClose }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");

  const isMobileSize = useMedia("(max-width:768px)", false);

  // const { isLoading, data: recentsBlogData } = useQuery({
  //   queryKey: ["recent-blog"],
  //   queryFn: () => fetchBlogData({ count: 4 }),
  // });

  // const { isLoading: isSearching, data: searchedBlogData } = useQuery({
  //   queryKey: ["search-blog", debouncedSearchValue],
  //   queryFn: () => searchBlogData({ searchValue: debouncedSearchValue }),
  //   enabled: !!debouncedSearchValue,
  // });

  const [, cancel] = useDebounce(
    () => {
      setDebouncedSearchValue(searchValue.trim());
    },
    300,
    [searchValue]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  useEffect(() => {
    if (!isOpen) {
      cancel();
    }
  }, [isOpen, cancel]);

  return (
    <Modal
      placement={isMobileSize ? "top-center" : "center"}
      size="md"
      shouldBlockScroll
      hideCloseButton
      isOpen={isOpen}
      onClose={onClose}
      className="mt-5 sm:mt-0"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 px-3">
              <Input
                radius="sm"
                isClearable
                placeholder="Search"
                startContent={<SearchIcon size={18} />}
                value={searchValue}
                onChange={handleChange}
                onClear={handleClear}
                classNames={isMobileSize ? { input: ["ml-1 text-medium"] } : {}}
              />
            </ModalHeader>
            <ModalBody
              className={cn(
                "h-full justify-between px-3 pt-0 pb-3 gap-4",
                "xs:h-fit xs:justify-normal"
              )}
            >
              {/* {(isLoading || isSearching) && (
                <div className="flex justify-center items-center w-full h-[12rem]">
                  <Spinner />
                </div>
              )}
              {!isLoading && !isSearching && searchedBlogData?.length === 0 && (
                <div className="flex justify-center items-center w-full h-[12rem]">
                  <p className="text-md text-gray-500">
                    검색결과가 존재하지 않습니다.
                  </p>
                </div>
              )}
              {!isLoading &&
                !isSearching &&
                recentsBlogData &&
                !searchedBlogData && (
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-gray-500">Recents Posts</p>
                    <div className="flex flex-col gap-1">
                      {recentsBlogData.map((data: Blog) => (
                        <Link
                          key={data.id}
                          href={`/post/${data.id}`}
                          className="w-full"
                        >
                          <Button
                            variant="light"
                            radius="sm"
                            className={cn(
                              "flex-col items-start w-full min-h-fit gap-0 p-2",
                              "bg-[#18181B] text-gray-200"
                            )}
                          >
                            <p className="text-gray-300">{data.name}</p>
                            <p className="text-xs text-gray-600">{data.date}</p>
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              {!isSearching &&
                searchedBlogData &&
                searchedBlogData.length > 0 && (
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-gray-500">Results</p>
                    <div
                      className={cn(
                        "flex flex-col max-h-[16.125rem] gap-1 overflow-y-scroll",
                        "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500"
                      )}
                    >
                      {searchedBlogData.map((data: Blog) => (
                        <Link key={data.id} href={`/post/${data.id}`}>
                          <Button
                            variant="light"
                            radius="sm"
                            className={cn(
                              "flex-col items-start w-full min-h-fit gap-0 p-2",
                              "bg-[#18181B] text-gray-200"
                            )}
                          >
                            <p className="text-gray-300">{data.name}</p>
                            <p className="text-xs text-gray-600">{data.date}</p>
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                )} */}

              <div className="flex justify-end items-center gap-3">
                <Link
                  href="/"
                  size="sm"
                  className={cn("bg-[#18181B]", "text-gray-500")}
                >
                  Home
                </Link>
                <Link
                  href="/post"
                  size="sm"
                  className={cn("bg-[#18181B]", "text-gray-500")}
                >
                  Posts
                </Link>
                <Link
                  showAnchorIcon
                  isExternal
                  href="https://github.com/ParkSeoJune"
                  size="sm"
                  className={cn("bg-[#18181B]", "text-gray-500")}
                >
                  Github
                </Link>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
