import React from "react";

function CardsTemplate({ type, title, body,price,id }) {
  let template = null;

  switch (type) {
    case "HOME_HERO":
      template = (
        <div className={`hero__card hero__card-${id}`}>
          <h3 className="hero__card--title">{title}</h3>
          <p className="hero__card--body">{body}</p>
          <p className="hero__card--price">{price}</p>
        </div>
      );
      break;

    default:
      template = <div>null</div>;
      break;
  }

  return template;
}

export default CardsTemplate;
