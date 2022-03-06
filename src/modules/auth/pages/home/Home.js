import React from "react";
import Bookings from "./components/Bookings";
import Hero from "../../../../component/elements/Hero";
import PopularHotels from "./components/PopularHotels";

function Home() {
  return (
    <>
      <Hero type={"HOME"} />
      <Bookings />
      <PopularHotels />
    </>
  );
}

export default Home;
