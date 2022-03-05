import React from "react";
import { useLocation } from "react-router-dom";
import HomeHeroCards from "../cards/HomeHeroCards";
import CustomButton from "../customButtons/CustomButton";

function Hero({ type }) {
  const location = useLocation();
  //   console.log(location);
  let template;

  function checkLocation(params) {
    if (params === "/") {
      return "home";
    }
    if (params === "/hotels") {
      return "hotels";
    }
    if (params === "/weather") {
      return "weather";
    }
  }

  switch (type) {
    case "HOME":
      template = (
        <>
          <h1 className="hero__home--headline">
            Discover the <span>world</span> differently
          </h1>
          <p className="hero__home--subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            justo, justo, mauris neque. Mattis ut ornare senectus consectetur.
            Lectus blandit sed nec varius scelerisque in. In et libero bibendum
            amet lobortis.
          </p>
          <div className="hero__home-btn">
            <CustomButton
              type="ORANGE"
              text="Plan a Trip"
              className={"hero__home--btn_left"}
            />
            <CustomButton
              type="TRANSPARENT"
              text="Preview"
              className={"hero__home--btn_right"}
            />
          </div>
          <HomeHeroCards />
        </>
      );

      break;

    default:
      template = <>null</>;
      break;
  }
  return (
    <div className={`hero hero__${checkLocation(location.pathname)}`}>
      {template}
    </div>
  );
}

export default Hero;