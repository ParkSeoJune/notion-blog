import { getPageTitle } from "notion-utils";

import Layout from "@/components/layouts";
import NotionPage from "@/components/notion/notion-page";
import { getNotionPage } from "@/lib/notion";

type PostDetailPageProps = {
  params: {
    postId: string;
  };
};

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const recordMap = await getNotionPage(params.postId);
  const title = await getPageTitle(recordMap);

  return (
    <Layout>
      <NotionPage
        title={title}
        recordMap={recordMap}
        rootPageId={params.postId}
      />
    </Layout>
  );
};

export default PostDetailPage;
