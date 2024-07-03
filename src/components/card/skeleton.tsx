import { Card, Skeleton } from "@nextui-org/react";

const CardSkeleton = () => (
  <Card className="w-[18.375rem] h-[12.5rem] space-y-5 p-4" radius="lg">
    <Skeleton className="rounded-lg">
      <div className="h-[7.5rem] rounded-lg bg-default-300" />
    </Skeleton>
    <div className="space-y-3">
      <Skeleton className="w-3/5 rounded-lg">
        <div className="h-3 w-3/5 rounded-lg bg-default-200" />
      </Skeleton>
      <Skeleton className="w-2/5 rounded-lg">
        <div className="h-3 w-2/5 rounded-lg bg-default-300" />
      </Skeleton>
    </div>
  </Card>
);

export default CardSkeleton;
