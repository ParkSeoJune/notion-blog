import { SearchIcon } from "@/assets/icons/search";
import { cn } from "@/lib/utils";
import { fetchBlogData, searchBlogData } from "@/services/api/main";
import { Blog } from "@/types/posts";
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
import { type ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "react-use";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SearchModal = ({ isOpen, onClose }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");

  const { isLoading, data: recentsBlogData } = useQuery({
    queryKey: ["recent-blog"],
    queryFn: () => fetchBlogData({ count: 4 }),
  });

  const { isLoading: isSearching, data: searchedBlogData } = useQuery({
    queryKey: ["search-blog", debouncedSearchValue],
    queryFn: () => searchBlogData({ searchValue: debouncedSearchValue }),
    enabled: !!debouncedSearchValue,
  });

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
      size="md"
      shouldBlockScroll
      hideCloseButton
      isOpen={isOpen}
      onClose={onClose}
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
              />
            </ModalHeader>
            <ModalBody className="px-3 pt-0 pb-3 gap-4">
              {(isLoading || isSearching) && (
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
                        <Link href={`/post/${data.id}`} className="w-full">
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
                    <div className="flex flex-col gap-1">
                      {searchedBlogData.map((data: Blog) => (
                        <Link href={`/post/${data.id}`}>
                          <Button
                            variant="light"
                            radius="sm"
                            className={cn(
                              "flex-col items-start min-h-fit gap-0 p-2",
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
