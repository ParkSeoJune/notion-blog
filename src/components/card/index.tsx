import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import type { Blog } from "@/types/posts";

const CardComponent = (data: Blog) => (
  <Card isPressable>
    <CardHeader className="pb-0 pt-4">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={data.image || ""}
        width={270}
      />
    </CardHeader>
    <CardBody className="flex flex-col gap-1 py-4 truncate">
      <p className="text-tiny uppercase font-bold">{data.name}</p>
      <small className="text-default-500">{data.date}</small>
      {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
    </CardBody>
  </Card>
);

export default CardComponent;
