import React from "react";
import { Link } from "react-router-dom";
import QueryCardTemplate from "../cards/QueryCardTemplate";

function QueryCardsContainer({
    layoutOrientation,
  cardTitle,
  cardBody,
  CardLink,
  cardArray,
  cardType,
}) {
  let template = null;

  switch (layoutOrientation) {
    case "HORIZONTAL":
      template = (
        <div
          className={`cardContainer queryCards-cards queryCards-cards-${cardType}`}
        >
          <div className="cardContainer__text">
            <h4 className="cardContainer__text-title">{cardTitle}</h4>
            <p className="cardContainer__text-body">{cardBody}</p>
            <Link to={`/hotels/${CardLink}`}>See all</Link>
          </div>
          <div className="cardContainer__cards">
            {cardArray &&
              cardArray.map((card, index) => {
                return (
                  <QueryCardTemplate
                    key={index}
                    bkImg={card?.result_object?.photo?.images?.medium?.url}
                    title={card?.result_object?.name}
                    cuisine={card?.result_object?.cuisine}
                    review={card?.result_object?.num_reviews}
                    rating={card?.result_object?.rating}
                    type={cardType}
                  />
                );
              })}
          </div>
        </div>
      );
      break;
    case "VERTICAL":
      template = (
        <div
          className={`cardContainer queryCards-cards queryCards-cards-${cardType}`} style={{flexDirection:"column"}}
        >
          <div className="cardContainer__text" style={{flexDirection:"row", justifyContent:"space-between", marginBottom:"1rem"}} >
            <h4 className="cardContainer__text-title">{cardTitle}</h4>
            <Link to={`/hotels/${CardLink}`}>See all</Link>
          </div>
          <div className="cardContainer__cards">
            {cardArray &&
              cardArray.map((card, index) => {
                return (
                  <QueryCardTemplate
                    key={index}
                    bkImg={card?.result_object?.photo?.images?.medium?.url}
                    title={card?.result_object?.name}
                    cuisine={card?.result_object?.cuisine}
                    review={card?.result_object?.num_reviews}
                    rating={card?.result_object?.rating}
                    type={cardType}
                  />
                );
              })}
          </div>
        </div>
      );
      break;

    default:
        template = <div>null</div>
      break;
  }

  return template;
}

export default QueryCardsContainer;
