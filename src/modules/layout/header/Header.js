import React, {  useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../../../component/customForms/SearchBar";
// import SearchLocationInput from "../../../component/customForms/PlacesAutoComplete";
// import SearchBar from "../../../component/customForms/SearchBar";
import Logo from "../../../component/customIcons/Logo";

function Header({ className, headerRef }) {
  const [hideNav, setHideNav] = useState(true);

  const toggleSideNav = () => {
    setHideNav(!hideNav);
  };

  return (
    <header ref={headerRef} className={` ${className}`}>
      <div className="header" >
      <Logo className={"header__logo "} />
      <nav className="header__navigation">
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
            <NavLink to={"/attractions"}>Attractions</NavLink>
          </li>
          <li className="header__navigation--link_item">
            <NavLink to={"/cars"}>Car Rentals</NavLink>
          </li>
          <li className="header__navigation--link_item">
            <NavLink to={"/hotels"}>Hotels</NavLink>
          </li>
          <li className="header__navigation--link_item">
            <NavLink to={"/restaurants"}>Restaurants</NavLink>
          </li>
        </ul>
        <SearchBar/>
      </nav>
      </div>
    </header>
  );
}

export default Header;
