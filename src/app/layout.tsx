import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/components/providers";

import "@/styles/global.css";
import GoogleAnalytics from "@/components/google-analytics";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jhintechblog.xyz/"),
  title: {
    default: "Jhin DevLog",
    template: "%s | Jhin DevLog",
  },
  description: "Blog posted about development",
  openGraph: {
    title: {
      default: "Jhin DevLog",
      template: "%s | Jhin DevLog",
    },
    url: "https://www.jhintechblog.xyz/",
    siteName: "Jhin DevLog",
    type: "website",
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="Jhin DevLog Feed RSS"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7110063599433500"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content="apuOLE59ujPD4XVuGxeGUD2LgaD6lD80K7FECjWx5GA"
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
