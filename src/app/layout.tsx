import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/components/providers";

import "@/styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://notion-blog-parkseojunes-projects.vercel.app/"
  ),
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
    url: "https://notion-blog-parkseojunes-projects.vercel.app/",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
