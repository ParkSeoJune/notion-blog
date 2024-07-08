import { getPageTitle } from "notion-utils";

import Layout from "@/components/layouts";
import ResumeDetail from "@/components/notion/resume-detail";
import { getNotionPage } from "@/lib/notion";

const resumePageId = process.env.NEXT_PUBLIC_RESUME_PAGE_ID || "";

const ResumePage = async () => {
  const recordMap = await getNotionPage(resumePageId);
  const title = await getPageTitle(recordMap);

  return (
    <Layout>
      <ResumeDetail
        title={title}
        recordMap={recordMap}
        rootPageId={resumePageId}
      />
    </Layout>
  );
};

export default ResumePage;
