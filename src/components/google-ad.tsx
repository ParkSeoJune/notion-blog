"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const GoogleAd = () => {
  useEffect(() => {
    const checkAdSenseScript = () => {
      if (typeof window.adsbygoogle !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } else {
        console.error("AdSense script not loaded");
      }
    };

    checkAdSenseScript();
  }, []);

  return (
    <div className="googleAd-container">
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-7110063599433500"
        data-ad-slot="7435531374"
      />
    </div>
  );
};

export default GoogleAd;
