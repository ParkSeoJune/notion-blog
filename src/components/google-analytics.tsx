"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { GA_TRACKING_ID, pageview } from "@/lib/gtag";

const GoogleAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && process.env.NODE_ENV !== "development") {
      pageview(pathname);
    }
  }, [pathname]);

  if (process.env.NODE_ENV === "development") return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></Script>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
        `,
        }}
      ></Script>
    </>
  );
};

export default GoogleAnalytics;
