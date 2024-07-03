import { SearchIcon } from "@/assets/icons/search";
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

const Header = () => (
  <header>
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand className="w-fit">
        <p className="font-bold">Notion Blog</p>
      </NavbarBrand>
      <NavbarContent as="div" className="items-center" justify="center">
        <Input
          classNames={{
            base: "max-w-full sm:min-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/" color="foreground">
            Posts
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  </header>
);

export default Header;
