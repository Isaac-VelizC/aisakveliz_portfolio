import type { ReactNode } from "react";
import Header from "./Header";
import BackToTopButton from "../components/BackToTopButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main Content */}
      <Header />
      <main className="relative z-auto">{children}</main>
      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
};

export default Layout;
