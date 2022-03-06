import React /* , { useEffect, useState } */ from "react";
import { Carousel } from "react-responsive-carousel";
import BookDestinationForm from "../../../../../component/customForms/BookDestinationForm";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomButton from "../../../../../component/customButtons/CustomButton";
// import axios from "axios";

function Bookings() {
  // const [randomImages, setRandomImages] = useState([])

  // useEffect(() => {
  //   axios.get("https://picsum.photos/v2/list?page=2&limit=4").then(res => setRandomImages(res.data)).catch(err => console.log(err))  

  // }, [])
  

  return (
    <section  className="booking" >
      <div className="booking__form">

      <BookDestinationForm />
      </div>
      <div className="booking__slides">
        <header className="booking__slides-header" >

        <p>Paradise on Earth</p>
        <CustomButton type={"ORANGE"} text={"Plan a Trip"} />
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
