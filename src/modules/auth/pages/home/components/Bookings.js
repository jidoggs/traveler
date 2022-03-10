import React from "react";
import { Carousel } from "react-responsive-carousel";
import BookDestinationForm from "../../../../../component/customForms/BookDestinationForm";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomButton from "../../../../../component/customButtons/CustomButton";
import { scrollTo } from "../../../../../component/helper/helperFunction";

function Bookings({bookingSectionRef,hotelsSectionRef}) {

  return (
    <section  className="booking" ref={bookingSectionRef} >
      <div className="booking__form">

      <BookDestinationForm />
      </div>
      <div className="booking__slides">
        <header className="booking__slides-header" >

        <p>Paradise on Earth</p>
        <CustomButton type={"ORANGE"} text={"Plan a Trip"} onClick={() => scrollTo(hotelsSectionRef)} />
        </header>
      <Carousel autoFocus={true} autoPlay={true} transitionTime={"100ms"} infiniteLoop={true} showArrows={false} renderIndicator={() => false}
      showStatus={false}
      >
        <div>
          <img src="https://picsum.photos/id/100/640/426" alt="destination" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1011/640/426" alt="destination" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1043/640/426" alt="destination" />
        </div>
        <div>
          <img src="https://picsum.photos/id/164/640/426" alt="destination" />
        </div>
      </Carousel>
        </div>
    </section>
  );
}

export default Bookings;
