import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QueryCardTemplate from "../../../component/cards/QueryCardTemplate";
import { addHotels, errorHotels } from "../../../redux/actions/locationActions";
import LoadingPage from "./LoadingPage";

function Hotel() {
  const userlocation = useSelector(
    (state) => state.locationReducer.userLocation
  );
  const data = useSelector((state) => state.locationReducer.userHotels.data);
  const error = useSelector((state) => state.locationReducer.userHotels.error);
  const loading = useSelector(
    (state) => state.locationReducer.userHotels.isLoading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng",
      params: {
        latitude: `${userlocation.latitude}`,
        longitude: `${userlocation.longitude}`,
        lang: "en_US",
        limit: "30",
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "25fc60c808msh221fbd0ae3cb637p1e48c2jsndcedce7a559e",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        dispatch(addHotels(response.data.data));
      })
      .catch(function (error) {
        dispatch(errorHotels(error));
      });
  }, [userlocation.longitude, userlocation.latitude]); // eslint-disable-line

  return (
    <>
      {data?.length > 0 && loading === false && error == null ? (
        <div className="hotelsPageContainer">
          {data
            ?.filter((hotel) => hotel?.photo?.images?.large?.url)
            .map((hotel, index) => {
              return (
                <QueryCardTemplate
                  key={index}
                  bkImg={hotel?.photo?.images?.large?.url}
                  title={hotel?.name}
                  rating={hotel?.hotel_class}
                  price={hotel?.price}
                  type="HOTELWITHPRICE"
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

export default Hotel;
