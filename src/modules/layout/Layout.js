import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { checkLocation } from "../../component/helper/helperFunction";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Layout() {
  const headerRef = useRef(null);
  const [headerPosition, setHeaderPosition] = useState(false);

  const location = useLocation();

  const changeHeaderBg = () => {
    if (window.scrollY >= 20) {
      setHeaderPosition(true);
    } else {
      setHeaderPosition(false);
    }
  };

  const position = window.screenY;

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderBg);

    return () => window.removeEventListener("scroll", changeHeaderBg);
  }, []);

  // useEffect(() => {
  //   if (window.scrollY >= 300) {
  //     headerRef.current.classList.add("addBlue");
  //   }
  //   if (headerRef.current.classList.contains("addBlue")) {
  //     headerRef.current.classList.remove("addBlue");
  //   }
  //   console.log(headerRef, window.scrollY);
  //   // window.screenTop
  // }, [position]);

  return (
    <div className="app ">
      <Header headerRef={headerRef} className={`app__header ${headerPosition? "addBlue":""} `} />
      <main className={`app__main app__main--${checkLocation(location)} `}>
        <Outlet />
      </main>
      <Footer className="app__footer" />
    </div>
  );
}

export default Layout;
