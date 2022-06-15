import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QueryCardTemplate from "../../../component/cards/QueryCardTemplate";
import {
  addResturants,
  errorResturants,
} from "../../../redux/actions/locationActions";
import LoadingPage from "./LoadingPage";

function Resturant() {
  const userlocation = useSelector(
    (state) => state.locationReducer.userLocation
  );
  const data = useSelector(
    (state) => state.locationReducer.userResturants.data
  );
  const error = useSelector(
    (state) => state.locationReducer.userResturants.error
  );
  const loading = useSelector(
    (state) => state.locationReducer.userResturants.isLoading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
      params: {
        latitude: `${userlocation.latitude}`,
        longitude: `${userlocation.longitude}`,
        limit: "30",
        currency: "USD",
        lunit: "km",
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
        dispatch(addResturants(response.data.data));
      })
      .catch(function (error) {
        dispatch(errorResturants(error));
      });
  }, [userlocation.longitude, userlocation.latitude]); // eslint-disable-line

  return (
    <>
      {data?.length > 0 && loading === false && error === null ? (
        <div className="hotelsPageContainer">
          {data
            ?.filter((food) => food?.photo?.images?.large?.url)
            .map((food, index) => {
              return (
                <QueryCardTemplate
                  key={index}
                  bkImg={food?.photo?.images?.large?.url}
                  title={food?.name}
                  rating={food?.rating}
                  cuisine={food?.cuisine}
                  type="NOPRICE"
                />
              );
            })}
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default Resturant;
