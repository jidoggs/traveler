import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QueryCardTemplate from "../../../component/cards/QueryCardTemplate";
import {
  addAttractions,
  errorAttractions,
} from "../../../redux/actions/locationActions";
import LoadingPage from "./LoadingPage";

function Attraction() {
  const userlocation = useSelector(
    (state) => state.locationReducer.userLocation
  );
  const data = useSelector(
    (state) => state.locationReducer.userAttractions.data
  );
  const error = useSelector(
    (state) => state.locationReducer.userAttractions.error
  );
  const loading = useSelector(
    (state) => state.locationReducer.userAttractions.isLoading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng",
      params: {
        latitude: `${userlocation.latitude}`,
        longitude: `${userlocation.longitude}`,
        lunit: "km",
        currency: "USD",
        lang: "en_US",
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "25fc60c808msh221fbd0ae3cb637p1e48c2jsndcedce7a559e",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        dispatch(addAttractions(response.data.data));
      })
      .catch(function (error) {
        dispatch(errorAttractions(error));
      });

    return () => {
      console.log("component unmount");
    };
  }, [userlocation.longitude, userlocation.latitude]); // eslint-disable-line

  return (
  <>
    {data?.length > 0 && loading === false && error === null ? (
      <div className="hotelsPageContainer">
        {
          data?.map((traction, index) => {
            return (
              <QueryCardTemplate
              key={index}
              bkImg={traction?.photo?.images?.large?.url}
              title={traction?.name}
              rating={traction?.rating}
              review={traction?.num_reviews}
              type="PRICE"
              />
              );
            })
        }
      </div>
      ) : (
        <LoadingPage />
        )}
  </>
  );
}

export default Attraction;
