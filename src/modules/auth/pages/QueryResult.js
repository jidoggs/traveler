import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QueryCardsContainer from "../../../component/elements/QueryCardsContainer";
import SearchQueryHero from "../../../component/elements/SearchQueryHero";
import {
  addingCorona,
  addingWeather,
  coronaDefault,
  errorCorona,
  errorWeather,
  weatherDefault,
} from "../../../redux/actions/queryActions";
import {
  addingSearchResult,
  clearingSearchResult,
  searchResultError,
} from "../../../redux/actions/searchActions";
import LoadingPage from "./LoadingPage";

function QueryResult() {
  const search = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();
  const coronaLoad = useSelector(
    (state) => state.queryHeroReducer.corona?.isLoading
  );
  const coronaError = useSelector(
    (state) => state.queryHeroReducer.corona?.error
  );
  const weatherLoad = useSelector(
    (state) => state.queryHeroReducer.weather?.isLoading
  );
  const weatherError = useSelector(
    (state) => state.queryHeroReducer.weather?.error
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (search.searchQuery === "" && search.searchResult.length === 0) {
      navigate("/");
    }
    return () => {
      dispatch(clearingSearchResult());
      dispatch(weatherDefault());
      dispatch(coronaDefault());
    };
  }, []); // eslint-disable-line

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://mimmofranco.herokuapp.com/https://travel-advisor.p.rapidapi.com/locations/search",
      params: {
        query: `${search.searchQuery}`,
        limit: "30",
        offset: "0",
        units: "km",
        location_id: "1",
        currency: "USD",
        sort: "relevance",
        lang: "en_US",
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "25fc60c808msh221fbd0ae3cb637p1e48c2jsndcedce7a559e",
      },
    };
    axios
      .request(options)
      .then((res) => dispatch(addingSearchResult(res.data.data)))
      .catch((err) => dispatch(searchResultError(err)));
  }, [search.searchQuery]); // eslint-disable-line

  const locationFiltered = search.searchResult?.filter(
    (param) => param?.is_top_result === true
  );
  const resturantsFiltered = search.searchResult?.filter(
    (param) => param?.result_type === "restaurants"
  );
  const hotelsFiltered = search.searchResult?.filter(
    (param) => param?.result_type === "lodging"
  );
  const activitiesFiltered = search.searchResult?.filter(
    (param) => param?.result_type === "things_to_do"
  );
  const toursFiltered = search.searchResult?.filter(
    (param) => param?.result_type === "activities"
  );
  const rentalsFiltered = search.searchResult?.filter(
    (param) => param?.result_type === "vacation_rentals"
  );

  const countryArray = locationFiltered?.[0]?.result_object?.ancestors?.filter(
    (ancestors) => ancestors.subcategory?.[0]?.key === "country"
  );
  const country =
    countryArray?.length !== undefined && countryArray?.length > 0
      ? countryArray[0]?.name
      : search.searchQuery.split(", ")[1];

  useEffect(() => {
    // country &&
    axios
      .get(
        `https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query%20`
      )
      .then((res) => dispatch(addingCorona(res.data)))
      .catch((covidError) => dispatch(errorCorona(covidError)));
  }, [country]); // eslint-disable-line

  useEffect(() => {
    locationFiltered?.[0]?.result_object &&
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${locationFiltered?.[0]?.result_object?.latitude}&lon=${locationFiltered?.[0]?.result_object?.longitude}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`
        )
        .then((res) => dispatch(addingWeather(res.data)))
        .catch((err) => dispatch(errorWeather(err)));
  }, [locationFiltered?.[0]?.result_object]); // eslint-disable-line

  return coronaLoad === false &&
    weatherLoad === false &&
    weatherError === null &&
    coronaError === null ? (
    <>
      <SearchQueryHero query={locationFiltered[0]} />

      <section className="queryCards">
        <h2 className="queryCards-title">{`Essential ${search.searchQuery}`}</h2>
        {resturantsFiltered?.length > 0 && (
          <QueryCardsContainer
            cardTitle={"Eat"}
            cardBody={"Can't-miss spots to dine, drink, and feast."}
            CardLink="/resturants"
            cardArray={resturantsFiltered}
            cardType="NOPRICE"
            layoutOrientation={"HORIZONTAL"}
          />
        )}
        {hotelsFiltered?.length > 0 && (
          <QueryCardsContainer
            cardTitle={"Stay"}
            cardBody={"A mix of the charming, modern, and tried and true."}
            CardLink="/hotels"
            cardArray={hotelsFiltered}
            cardType="PRICE"
            layoutOrientation={"HORIZONTAL"}
          />
        )}
        {activitiesFiltered?.length > 0 && (
          <QueryCardsContainer
            cardTitle={"Do"}
            cardBody={
              "Places to see, ways to wander, and signature experiences."
            }
            CardLink="/attractions"
            cardArray={activitiesFiltered}
            cardType="PRICE"
            layoutOrientation={"HORIZONTAL"}
          />
        )}
      </section>
      {toursFiltered?.length > 0 || rentalsFiltered?.length > 0 || (
        <section className="queryCards">
          <h2 className="queryCards-title">{`Essential ${search.searchQuery}`}</h2>
          {toursFiltered?.length > 0 && (
            <QueryCardsContainer
              cardTitle={"Nature and Wildlife"}
              CardLink="/attractions"
              cardArray={toursFiltered}
              cardType="PRICE"
              layoutOrientation={"VERTICAL"}
            />
          )}
          {rentalsFiltered?.length > 0 && (
            <QueryCardsContainer
              cardTitle={`Popular homes in ${search.searchQuery}`}
              CardLink="/hotels"
              cardArray={rentalsFiltered}
              cardType="PRICE"
              layoutOrientation={"VERTICAL"}
            />
          )}
        </section>
      )}
    </>
  ) : (
    <LoadingPage />
  );
}

export default QueryResult;
