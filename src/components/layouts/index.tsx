import { type ReactNode } from "react";

import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow flex justify-center dark text-foreground bg-background">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
