import React, { useRef } from "react";
import Bookings from "./components/Bookings";
import Hero from "../../../../component/elements/Hero";
import PopularHotels from "./components/PopularHotels";

function Home() {
  const bookingSectionRef = useRef(null)
  const hotelsSectionRef = useRef(null)

 

  return (
    <>
      <Hero type={"HOME"} bookingSectionRef={bookingSectionRef} />
      <Bookings bookingSectionRef={bookingSectionRef} hotelsSectionRef={hotelsSectionRef} />
      <PopularHotels hotelsSectionRef={hotelsSectionRef} />
    </>
  );
}

export default Home;
