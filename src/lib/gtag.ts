export const GA_TRACKING_ID: string | undefined = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: URL | string) => {
  window.gtag("config", GA_TRACKING_ID as string, {
    page_path: url,
  });
};
