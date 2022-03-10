import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QueryCardTemplate from "../../../component/cards/QueryCardTemplate";
import { addHotels, errorHotels } from "../../../redux/actions/locationActions";
import LoadingPage from "./LoadingPage";

function Hotel() {
  const userlocation = useSelector(state => state.locationReducer.userLocation)
  const data = useSelector(state => state.locationReducer.userHotels.data)
  const error = useSelector(state => state.locationReducer.userHotels.error)
  const loading = useSelector(state => state.locationReducer.userHotels.isLoading)
  const dispatch = useDispatch()



  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
      params: {
        latitude: `${userlocation.latitude}`,
        longitude: `${userlocation.longitude}`,
        lang: 'en_US',
        limit: '30',
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '18400156e4mshc1f3c9773a6e009p185fd6jsn26c4eddf1225'
      }
    };
    
    axios.request(options).then(function (response) {
      dispatch(addHotels(response.data.data));
    }).catch(function (error) {
      dispatch(errorHotels(error));
    });
    
  }, [userlocation.longitude, userlocation.latitude])
  
  return <div className="hotelsPageContainer">
    {
      data?.length > 0 && loading === false && error == null ?
      
      data?.map((hotel,index) => { 

        return <QueryCardTemplate key={hotel?.location_id} bkImg={hotel?.photo?.images?.large?.url} title={hotel?.name} rating={hotel?.hotel_class} price={hotel?.price} type="HOTELWITHPRICE" />
       })
       :

       <LoadingPage />
    }
      
    
  </div>;
}

export default Hotel;
