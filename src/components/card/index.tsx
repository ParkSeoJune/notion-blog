import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";
import Link from "next/link";

import type { Blog } from "@/types/posts";

const CardComponent = (data: Blog) => (
  <Link href={`/post/${data.id}`}>
    <Card isPressable isHoverable className="w-[294px]">
      <CardHeader className="pb-0 pt-4">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={data.image || ""}
          width={270}
          height={120}
        />
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
          <p className="text-tiny uppercase font-bold truncate">{data.name}</p>
          <small className="text-default-500">{data.date}</small>
        </div>
      </CardBody>
    </Card>
  </Link>
);

export default CardComponent;
