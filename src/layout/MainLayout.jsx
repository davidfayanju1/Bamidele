import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="item_contain mt-[6rem]">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
