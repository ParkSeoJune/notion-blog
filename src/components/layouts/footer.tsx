import { cn } from "@/lib/utils";
import { Link } from "@nextui-org/react";

const Footer = () => (
  <footer
    className={cn(
      "px-5 py-6 mt-10",
      "border-t-1 border-gray-800 bg-neutral-900",
      "xs:mt-20 xs:px-8 sm:px-16 lg:px-[7rem]"
    )}
  >
    <div
      className={cn(
        "flex flex-col justify-between h-[5.5rem]",
        "xs:h-[6.25rem]"
      )}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-[0.875rem]">
            Frontend Developer: ParkSeoJune
          </p>
          <p className="text-xs">Built with NextJS</p>
        </div>

        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/ParkSeoJune"
          size="sm"
          color="foreground"
          className="h-fit"
        >
          Github
        </Link>
      </div>
      <p className="text-xs">© Blog, All right reserved</p>
    </div>
  </footer>
);

export default Footer;
