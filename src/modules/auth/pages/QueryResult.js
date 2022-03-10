import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import QueryCardsContainer from '../../../component/elements/QueryCardsContainer'
import SearchQueryHero from '../../../component/elements/SearchQueryHero'
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



  const locationFiltered = search.searchResult.filter((param) => param?.is_top_result === true)
  const resturantsFiltered = search.searchResult.filter((param) => param?.result_type === "restaurants")
  const hotelsFiltered = search.searchResult.filter((param) => param?.result_type === "lodging")
  const activitiesFiltered = search.searchResult.filter((param) => param?.result_type === "things_to_do")
  const toursFiltered = search.searchResult.filter((param) => param?.result_type === "activities")
  const rentalsFiltered = search.searchResult.filter((param) => param?.result_type === "vacation_rentals")




  
  return (
    <div>
      <SearchQueryHero query={locationFiltered[0]}/>
      
      <section className="queryCards">
        
        <h2 className="queryCards-title" >{`Essential ${search.searchQuery}`}</h2>
        {
          resturantsFiltered?.length > 0 && 
          <QueryCardsContainer 
            cardTitle={"Eat"} 
            cardBody={"Can't-miss spots to dine, drink, and feast."} 
            CardLink="/" cardArray={resturantsFiltered} cardType="NOPRICE" layoutOrientation={"HORIZONTAL"}
          />
        }
        {
          hotelsFiltered?.length > 0 && 
          <QueryCardsContainer 
            cardTitle={"Stay"} 
            cardBody={"A mix of the charming, modern, and tried and true."} 
            CardLink="/" cardArray={hotelsFiltered} cardType="PRICE" layoutOrientation={"HORIZONTAL"}
          />
        }
        {
          activitiesFiltered?.length > 0 && 
          <QueryCardsContainer 
            cardTitle={"Do"} 
            cardBody={"Places to see, ways to wander, and signature experiences."} 
            CardLink="/" cardArray={activitiesFiltered} cardType="PRICE" layoutOrientation={"HORIZONTAL"}
          />
        }
      </section>
      <section className="queryCards">
        
        <h2 className="queryCards-title" >{`Essential ${search.searchQuery}`}</h2>
        {
          toursFiltered?.length > 0 && 
          <QueryCardsContainer 
            cardTitle={"Nature and Wildlife"} 
            CardLink="/" cardArray={toursFiltered} cardType="PRICE" layoutOrientation={"VERTICAL"}
          />
        }
        {
          rentalsFiltered?.length > 0 && 
          <QueryCardsContainer 
            cardTitle={`Popular homes in ${search.searchQuery}`} 
            CardLink="/" cardArray={rentalsFiltered} cardType="PRICE" layoutOrientation={"VERTICAL"}
          />
        }
      </section>
    </div>
  )
}

export default QueryResult