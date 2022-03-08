import React from "react";
import CardsTemplate from "../../../../../component/cards/CardsTemplate";

function PopularHotels() {
  const img1 = "https://media.cntraveler.com/photos/5f678a42978ff785b250160b/master/w_2580%2Cc_limit/la-mamounia-marrakech.jpg"
  const img2 = "https://media.cntraveler.com/photos/61a512bae663d9fce4b7115e/master/w_2580%2Cc_limit/Four%2520Seasons%2520Jumeirah_DJB_292.jpg"
  const img3 = "https://media.cntraveler.com/photos/61d263112fa588652312b9d7/master/w_2580%2Cc_limit/Bellagio_Exterior_Day_Unlimited.jpg"
  return (
    <section className="home__hotels" aria-label={"homeHotels"} >
      <header>
        <h2>Popular Hotels</h2>
      </header>
      <div className="home__hotels-links">
          <CardsTemplate type={"HOME_HOTELS"} bgImage={img1} title={"La Mamounia"} body={"Marrakech, Morroco"} price={"$900"} />
          <CardsTemplate type={"HOME_HOTELS"} bgImage={img2} title={"Four Seasons Resort"} body={"Dubai, UAE"} price={"$1200"} />
          <CardsTemplate type={"HOME_HOTELS"} bgImage={img3} title={"Bellagio"} body={"Las Vegas, USA"} price={"$1500"} /> 
      </div>
    </section>
  );
}

export default PopularHotels;
