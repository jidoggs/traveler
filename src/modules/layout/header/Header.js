import React, {  useState } from "react";
import { NavLink } from "react-router-dom";
// import SearchLocationInput from "../../../component/customForms/PlacesAutoComplete";
// import SearchBar from "../../../component/customForms/SearchBar";
import Logo from "../../../component/customIcons/Logo";

function Header({ className }) {
  const [hideNav, setHideNav] = useState(true);

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
      </nav>
    </header>
  );
}

export default Header;
