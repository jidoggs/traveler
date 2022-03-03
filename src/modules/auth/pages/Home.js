import React from "react";
import Bookings from "../../../component/elements/Bookings";
import Hero from "../../../component/elements/Hero";

function Home() {
  return (
    <>
      <Hero type={"HOME"} />
      <Bookings />
      Home
    </>
  );
}

export default Home;
