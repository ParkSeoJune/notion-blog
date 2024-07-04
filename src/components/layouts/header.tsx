"use client";

import {
  Button,
  Kbd,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { useEffect } from "react";

import { SearchIcon } from "@/assets/icons/search";

import SearchModal from "@/components/search-modal";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        onOpen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Navbar isBordered maxWidth="full" className="px-4">
        <NavbarBrand>
          <Link href="/" className="font-bold">
            Notion Blog
          </Link>
        </NavbarBrand>
        <NavbarContent
          as="div"
          className="items-center"
          justify="center"
        ></NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="flex items-center gap-5">
            <Link href="/posts" color="foreground">
              Posts
            </Link>

            <Button
              className="justify-between max-w-full sm:min-w-[12rem] h-10"
              size="sm"
              startContent={<SearchIcon size={18} />}
              endContent={
                <Kbd keys={["command"]} slot="abbr">
                  K
                </Kbd>
              }
              onClick={onOpen}
            >
              Type to Search...
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
