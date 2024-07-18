"use client";

import { useEffect, useRef, type ReactNode } from "react";

import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => {
  const hasUpdatedVisitorCount = useRef(false);

  useEffect(() => {
    if (hasUpdatedVisitorCount.current) return;

    const updateVisitorCount = async () => {
      const res = await fetch("/api/update-visitor-count");
      if (res.ok) {
        await res.json();

        hasUpdatedVisitorCount.current = true;
      } else {
        console.error("Error updating visitor count:", res.statusText);
      }
    };

    updateVisitorCount();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center dark text-foreground bg-background">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
