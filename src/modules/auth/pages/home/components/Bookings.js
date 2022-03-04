import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import BookDestinationForm from "../../../../../component/customForms/BookDestinationForm";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

function Bookings() {
  const [randomImages, setRandomImages] = useState([])

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list?page=2&limit=4").then(res => setRandomImages(res.data)).catch(err => console.log(err))  

  }, [])
  

  return (
    <div style={{ backgroundColor: "GrayText", zIndex: 500, display:"flex" }}>
      <BookDestinationForm />
      <Carousel autoFocus={true}  width={"50%"} autoPlay={true} transitionTime={"100ms"} infiniteLoop={true} showArrows={false} renderIndicator={() => false}
      showStatus={false}
      // showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} 
      >
        <div>
          <img src="https://picsum.photos/id/100/640/426" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="https://picsum.photos/id/1011/640/426" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="https://picsum.photos/id/1043/640/426" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src="https://picsum.photos/id/164/640/426" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default Bookings;
