import React from 'react'
import { useNavigate } from 'react-router-dom'

function HotelCardsTemplate({type,id, bgImage, title, body,price}) {
    const navigate = useNavigate()
    let template = null
    switch (type) {
        case "HOME":
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
        case "QUERY":

            template = (
                <div className={`query__hotel-card query__hotel-card--${id}`}>
                  <div className="query__hotel-img" style={{backgroundImage: `url(${bgImage})`}}></div>
                  <div className="query__hotel-text">
                  <h3 className="query__hotel-text--title">{title}</h3>
                  <p className="query__hotel-text--body">{body}</p>
                  <p className="query__hotel-text--price">{price}</p>
                  <CustomButton type={"BLUE"} text="View Deal" className={"query__hotel-text--btn"} onClick={btnClickHandler} />
                    </div>
                </div>
              );
            
            break;
        case "SINGLE":
            
            break;
    
        default:
            template=<div>HotelCardTemplate</div>
            break;
    }
  return (
    <div>HotelCardsTemplate</div>
  )
}

export default HotelCardsTemplate