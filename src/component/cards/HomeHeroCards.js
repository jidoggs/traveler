import React from "react";
import CardsTemplate from "./CardsTemplate";

function HomeHeroCards() {
  const data = [
    {
      title: "Baecation",
      body: "5-star Hotel, 2 persons, 3 nights.",
      price: "€250",
    },
    {
      title: "Tour for Travelers",
      body: "3-star Hotel, 10 persons, 4 nights.",
      price: "€350",
    },
    {
      title: "Weekend Getaway",
      body: "2-star Hotel, 5 persons, 2 nights.",
      price: "€150",
    },
  ];
  return (
    <div className="hero__cards">
      <div className="hero__cards--container">
        {data.map((card, idx) => {
          const { title, body, price } = card;
          return (
            <CardsTemplate
              id={idx}
              key={idx}
              type="HOME_HERO"
              body={body}
              price={price}
              title={title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeHeroCards;
