import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";
import Link from "next/link";
import NextImage from "next/image";

import { cn } from "@/lib/utils";

import type { Blog } from "@/types/posts";

const CardComponent = (data: Blog) => (
  <Link href={`/post/${data.id}`}>
    <Card isPressable isHoverable className="w-full">
      <CardHeader
        className={cn(
          "pb-0 min-h-[8.875rem] pt-3",
          "xs:min-h-[9rem] sm:min-h-[7.625rem] lg:min-h-[8.125rem]"
        )}
      >
        <div className="relative w-full h-[9.5rem]">
          <NextImage
            alt="Card background"
            className={cn("object-cover rounded-xl")}
            src={data.image || ""}
            fill
          />
        </div>
      </CardHeader>
      <CardBody className="pb-4 gap-2">
        <div className="flex gap-1">
          {data.tag &&
            data.tag.map((data) => (
              <Chip
                color="primary"
                size="sm"
                radius="sm"
                variant="dot"
                key={data.id}
              >
                {data.name.toUpperCase()}
              </Chip>
            ))}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm uppercase font-bold truncate">{data.name}</p>
          <small className="text-default-500">{data.date}</small>
        </div>
      </CardBody>
    </Card>
  </Link>
);

export default CardComponent;
