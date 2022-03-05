import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchLocationInput from "../../../component/customForms/PlacesAutoComplete";
import SearchBar from "../../../component/customForms/SearchBar";
import Logo from "../../../component/customIcons/Logo";

function Header({ className }) {
  const [hideNav, setHideNav] = useState(true);
  const autoComp = useRef(null)
  const [state, setState] = useState({search:"",value:""})

 const handleInputChange = e => {
    setState({search: e.target.value, value: e.target.value})
}

const handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
    console.log(geocodedPrediction, originalPrediction) // eslint-disable-line
    setState({
        search: "",
        value: geocodedPrediction.formatted_address,
    })
}

const handleNoResult = () => {
    console.log("No results for ", state.search)
}

const handleStatusUpdate = status => {
    console.log(status)
}

  
  
  const toggleSideNav = () => {
    setHideNav(!hideNav);
  };

  return (
    <header className={` ${className} header   bg-green-400`}>
      <Logo className={"header__logo "} />
      <nav className="header__navigation   bg-slate-400 grow  flex flex-row-reverse ">
        <span
          className={`hambuger ${!hideNav ? "showSideNav" : ""} grow `}
          onClick={toggleSideNav}
        ></span>
        <ul
          className={`header__navigation--link absolute right-12 top-14 ${
            hideNav ? "hidden" : ""
          }  `}
        >
          <li className="header__navigation--link_item">
            <NavLink to={"/recreationCenters"}>Recreation Centers</NavLink>
          </li>
          <li className="header__navigation--link_item">
            <NavLink to={"/weather"}>Weather</NavLink>
          </li>
          <li className="header__navigation--link_item">
            <NavLink to={"/hotels"}>Hotels</NavLink>
          </li>
          <li className="header__navigation--link_item">
            <NavLink to={"/rentals"}>Car Rentals</NavLink>
          </li>
          <li className="header__navigation--link_item">
            <NavLink to={"/traveladvice"}>Travel Advice</NavLink>
          </li>
        </ul>
        {/* <GooglePlacesAutocomplete ref={autoComp} placeholder="Type in an address"  apiKey="AIzaSyABOw2OSIg3W6jl29QlcsOYYl-6qVXgsls"  
        onSelect={(val) => { setValue(val) }}
        /> */}

        {/* <SearchLocationInput /> */}
        <SearchBar />
       
      </nav>
    </header>
  );
}

export default Header;