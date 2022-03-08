import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addingSearchResult } from '../../../redux/actions/searchActions'

function QueryResult() {
    const search = useSelector(state => state.searchReducer)
    const dispatch = useDispatch()

   

    var options = {
      method: 'GET',
      url: 'https://mimmofranco.herokuapp.com/https://travel-advisor.p.rapidapi.com/locations/search',
      params: {
        query: `${search.searchQuery}`,
        limit: '30',
        offset: '0',
        units: 'km',
        location_id: '1',
        currency: 'USD',
        sort: 'relevance',
        lang: 'en_US'
      },
    headers: {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      'x-rapidapi-key': "18400156e4mshc1f3c9773a6e009p185fd6jsn26c4eddf1225"
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then((res) => dispatch(addingSearchResult(res.data.data)))
      .catch((err) => console.log(err));
  }, [search.searchQuery]);// eslint-disable-line

  
  return (
    <div>QueryResult</div>
  )
}

export default QueryResult