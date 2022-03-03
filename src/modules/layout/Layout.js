import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Layout() {
  return (
    <div className="app ">
      <Header className="app__header" />
      <main className="app__main  ">
        <Outlet />
      </main>
      <Footer className="app__footer" />
    </div>
  );
}

export default Layout;
