import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import QueryCardTemplate from '../../../component/cards/QueryCardTemplate'
import { addAttractions, errorAttractions } from '../../../redux/actions/locationActions'
import LoadingPage from './LoadingPage'

function Attraction() {
  const userlocation = useSelector(state => state.locationReducer.userLocation)
  const data = useSelector(state => state.locationReducer.userAttractions.data)
  const error = useSelector(state => state.locationReducer.userAttractions.error)
  const loading = useSelector(state => state.locationReducer.userAttractions.isLoading)
  const dispatch = useDispatch()



  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
      params: {
        longitude: '109.19553',
        latitude: '12.235588',
        lunit: 'km',
        currency: 'USD',
        lang: 'en_US'
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '18400156e4mshc1f3c9773a6e009p185fd6jsn26c4eddf1225'
      }
    };
    
    axios.request(options).then(function (response) {
      dispatch(addAttractions(response.data.data));
    }).catch(function (error) {
      dispatch(errorAttractions(error));
    });
    
  }, [userlocation.longitude, userlocation.latitude])
  
  return <div className="hotelsPageContainer">
    {
      data?.length > 0 && loading === false && error === null ?
      
      data?.map((traction,index) => { 

        return <QueryCardTemplate key={traction?.location_id} bkImg={traction?.photo?.images?.large?.url} title={traction?.name} rating={traction?.rating} review={traction?.num_reviews} type="PRICE" />
       })
       :

       <LoadingPage />
    }
      
    
  </div>;
}

export default Attraction