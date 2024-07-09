import { type Metadata } from "next";
import { getPageTitle } from "notion-utils";

import Layout from "@/components/layouts";
import NotionPage from "@/components/notion/notion-page";
import { getNotionPage } from "@/lib/notion";

type PostDetailPageProps = {
  params: {
    postId: string;
  };
};

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  const pageId = params.postId;
  const recordMap = await getNotionPage(pageId);
  const title = getPageTitle(recordMap);
  return {
    title: `${title}`,
    alternates: {
      canonical: `https://notion-blog-parkseojunes-projects.vercel.app/post${pageId}`,
    },
    openGraph: {
      title: `${title}`,
    },
  };
}

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
