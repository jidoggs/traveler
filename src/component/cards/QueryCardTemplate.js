import React from "react";

function QueryCardTemplate({ type, bkImg, title, rating, cuisine, review,price }) {
  let template;
  const capitalizeEachword = (sentence) => {
    return sentence
      ?.map((str) => {
        return str?.name?.charAt(0)?.toUpperCase() + str?.name?.slice(1);
      })
      ?.join(", ");
  };
  switch (type) {
    case "NOPRICE":
      template = (
        <div className="card">
          <div
            className="card__image" role={"img"} 
            style={{ backgroundImage: `url(${bkImg})` }}
          ></div>
          <div className="card__text">
            <h3 className="card__text-title">{title}</h3>
            <p className="card__text-rating">
              {" "}
              <span className="stars">★★★★</span>★ {rating}
            </p>
            {cuisine && (
              <p className="card__text-description">
                {capitalizeEachword(cuisine)}
              </p>
            )}
          </div>
        </div>
      );

      break;
    case "PRICE":
      template = (
        <div className="card">
          <div
            className="card__image"
            style={{ backgroundImage: `url(${bkImg})` }}
          ></div>
          <div className="card__text">
            <h3 className="card__text-title">{title}</h3>
            <p className="card__text-rating">
              {" "}
              <span className="stars">★★★★</span>★ {rating}
            </p>
            {review && (
              <p className="card__text-price">{`${review} reviews so far`}</p>
            )}
          </div>
        </div>
      );

      break;
    case "HOTELWITHPRICE":
      template = (
        <div className="card">
          <div
            className="card__image"
            style={{ backgroundImage: `url(${bkImg})` }}
          ></div>
          <div className="card__text">
            <h3 className="card__text-title">{title}</h3>
            <p className="card__text-rating">
              {" "}
              <span className="stars">★★★★</span>★ {rating}
            </p>
            {price && (
              <p className="card__text-price">{`Between ${price} per night`}</p>
            )}
          </div>
        </div>
      );

      break;

    default:
      template = <div>null</div>;
      break;
  }
  return template;
}

export default QueryCardTemplate;
