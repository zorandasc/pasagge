import React from "react";
import { Navbar, Sidebar, Footer } from "../components";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
