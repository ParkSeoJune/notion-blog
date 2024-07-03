import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import type { Blog } from "@/types/posts";
import Link from "next/link";

const CardComponent = (data: Blog) => (
  <Link href={`/post/${data.id}`}>
    <Card isPressable isHoverable>
      <CardHeader className="pb-0 pt-4">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={data.image || ""}
          width={270}
          height={120}
        />
      </CardHeader>
      <CardBody className="flex flex-col gap-1 py-4 truncate">
        <p className="text-tiny uppercase font-bold">{data.name}</p>
        <small className="text-default-500">{data.date}</small>
      </CardBody>
    </Card>
  </Link>
);

export default CardComponent;
