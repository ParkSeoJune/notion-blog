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
import { cn } from "@/lib/utils";

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
  }, [onOpen]);

  return (
    <>
      <Navbar isBordered maxWidth="full" className="h-14 xs:h-16 sm:px-8">
        <NavbarBrand>
          <Link href="/" className="font-bold">
            Jhin Devlog
          </Link>
        </NavbarBrand>
        <NavbarContent
          as="div"
          className="items-center"
          justify="center"
        ></NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="flex items-center gap-5">
            <Link href="/post" color="foreground">
              Posts
            </Link>

            <Link href="/resume" color="foreground">
              Resume
            </Link>

            <Button
              className={cn(
                "hidden justify-between max-w-full xs:min-w-[12rem] h-10",
                "xs:flex"
              )}
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

            <button
              type="button"
              aria-label="search"
              onClick={onOpen}
              className="xs:hidden"
            >
              <SearchIcon size={18} />
            </button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
