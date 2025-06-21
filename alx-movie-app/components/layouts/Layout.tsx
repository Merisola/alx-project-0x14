import React from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ComponentProps } from "@/interfaces/index";

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
