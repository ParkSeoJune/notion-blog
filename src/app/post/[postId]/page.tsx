import Renderer from "@/components/notion/renderer";
import { getNotionPage } from "@/lib/notion";

type PostDetailPageProps = {
  params: {
    postId: string;
  };
};

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const data = await getNotionPage(params.postId);

  return (
    <main>
      <Renderer recordMap={data} rootPageId={params.postId} />
    </main>
  );
};

export default PostDetailPage;
