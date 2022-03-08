import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { checkLocation } from "../../component/helper/helperFunction";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Layout() {
  const [headerPosition, setHeaderPosition] = useState(false);

  const {pathname} = useLocation();

  const changeHeaderBg = () => {
    if (window.scrollY >= 20) {
      setHeaderPosition(true);
    } else {
      setHeaderPosition(false);
    }
  };
  
  
  
  useEffect(() => {
    if(pathname === "/"){
      window.addEventListener("scroll", changeHeaderBg);
    }


    return () => window.removeEventListener("scroll", changeHeaderBg);
  }, [pathname]);


  return (
    <div className="app ">
      <Header  className={`app__header ${headerPosition? "addBlue":""} `} />
      <main className={`app__main app__main--${checkLocation(pathname)} `}>
        <Outlet />
      </main>
      <Footer className="app__footer" />
    </div>
  );
}

export default Layout;
