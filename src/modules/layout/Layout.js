import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { checkLocation } from "../../component/helper/helperFunction";
import { addingLatitude, addingLongitude } from "../../redux/actions/locationActions";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Layout() {
  const [headerPosition, setHeaderPosition] = useState(false);
  const dispatch = useDispatch()

  const {pathname} = useLocation();

  const changeHeaderBg = () => {
    if (window.scrollY >= 20) {
      setHeaderPosition(true);
    } else {
      setHeaderPosition(false);
    }
  };

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
      alert("Sorry, your browser does not support HTML5 geolocation.");
  }

  function successCallback(position) {
    dispatch(addingLongitude(position.coords.longitude))
    dispatch(addingLatitude(position.coords.latitude))
}
function errorCallback(error) {
  if(error.code == 1) {
    alert("You've decided not to share your position, but it's OK. We won't ask you again.")
  } else if(error.code == 2) {
    alert("The network is down or the positioning service can't be reached.")
  } else if(error.code == 3) {
    alert("The attempt timed out before it could get the location data.")
  } else {
    alert("Geolocation failed due to unknown error.")
  }
}
  }, [])
  
  
  
  useEffect(() => {
    if(pathname === "/" || pathname === "/search-result"){
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
