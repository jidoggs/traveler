import React from "react";
import {  useSelector } from "react-redux";

function SearchQueryHero({ query }) {
  const coronaNews = useSelector(state => state.queryHeroReducer.corona.data)
  const weather = useSelector(state => state.queryHeroReducer.weather.data)

  return (
    <section
    className={`hero__query`}
      style={{
        backgroundImage: `url(${query?.result_object?.photo?.images?.original?.url})`,
      }}
    >
      <div className="hero__query--text">
      <h1 className="hero__query--text_title">
        {query?.result_object?.location_string}
      </h1>
      {query?.result_object?.geo_description && (
        <p className="hero__query--text_sub">
          {query?.result_object?.geo_description}
        </p>
      )}
      <div className="hero__query--text_body">
      
      {weather && (
        <p className="hero__query--text_body-2" >
          {weather?.name} currently has a temprature of {weather?.main?.temp}{" "}
          degrees celcius and a humidity of {weather?.main?.humidity}%
        </p>
      )}
      {weather && coronaNews && (
        <>
          <p className="hero__query--text_body-3" >
            {weather?.name} is a place in {coronaNews?.country} which has a
            population of {coronaNews?.population} people. There have been over{" "}
            {coronaNews?.cases} cases of Corona Virus since the outbrake. There
            are currently {coronaNews?.active} cases of Corona Virus with a
            fatility rate of {coronaNews?.criticalPerMillion} per One Million.
          </p>
          <p className="hero__query--text_body-4" >
            {weather?.name} will be a lovely place to visit please be safe while
            visiting
          </p>
        </>
      )}
      </div>
      </div>
    </section>
  );
}

export default SearchQueryHero;
