import { type ReactNode } from "react";

import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className="dark text-foreground bg-background">{children}</main>
    {/* <Footer /> */}
  </>
);

export default Layout;
