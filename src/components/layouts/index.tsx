import { type ReactNode } from "react";

import Footer from "./footer";
import Header from "./header";

async function updateVisitorCount() {
  const res = await fetch("/api/update-visitor-count");
  if (res.ok) {
    await res.json();
  } else {
    console.error("Error updating visitor count:", res.statusText);
  }
}

const Layout = async ({ children }: { children: ReactNode }) => {
  await updateVisitorCount();

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
