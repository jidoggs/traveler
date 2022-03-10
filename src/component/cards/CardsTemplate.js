import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../customButtons/CustomButton";

function CardsTemplate({ type, title, body,price,id, bgImage }) {
  let template = null;
  const navigate  = useNavigate()

  
  switch (type) {
    case "HOME_HERO":
      template = (
        <div className={`hero__card hero__card-${id}`} onClick={() => navigate("/hotels")} >
          <h3 className="hero__card--title">{title}</h3>
          <p className="hero__card--body">{body}</p>
          <p className="hero__card--price">{price}</p>
        </div>
      );
      break;
      case "HOME_HOTELS":
      const btnClickHandler = () => { 
          navigate(`/hotels`)
       }
      template = (
        <div className={`home__hotel-card home__hotel-card--${id}`}>
          <div className="home__hotel-img" style={{backgroundImage: `url(${bgImage})`}}></div>
          <div className="home__hotel-text">
          <h3 className="home__hotel-text--title">{title}</h3>
          <p className="home__hotel-text--body">{body}</p>
          <p className="home__hotel-text--price">{price}</p>
          <CustomButton type={"BLUE"} text="View Deal" className={"home__hotel-text--btn"} onClick={btnClickHandler} />
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

export default CardsTemplate;
