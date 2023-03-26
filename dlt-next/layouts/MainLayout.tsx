import React, { ReactNode } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <section className="main">
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </section>
  );
};

export default MainLayout;
