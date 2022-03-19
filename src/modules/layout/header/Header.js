import React, {  useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../../../component/customForms/SearchBar";
import Logo from "../../../component/customIcons/Logo";

function Header({ className }) {
  const [hideNav, setHideNav] = useState(false);

  const toggleSideNav = () => {
    setHideNav(!hideNav);
  };

  return (
    <header  className={` ${className}`}>
      <div className="header" >
      <Logo className={"header__logo "} />
        <span
          className={`hambuger ${!hideNav ? "showSideNav" : ""} grow `}
          onClick={toggleSideNav}
        ></span>
      <nav className={`header__navigation ${hideNav? "showNav": ""}`}>
        <ul
          className={`header__navigation--link absolute right-12 top-14`}
        >
          <li className="header__navigation--link_item">
            <NavLink to={"/attractions"}>Attractions</NavLink>
          </li>
          <li className="header__navigation--link_item">
            <NavLink to={"/hotels"}>Hotels</NavLink>
          </li>
          <li className="header__navigation--link_item">
            <NavLink to={"/restaurants"}>Restaurants</NavLink>
          </li>
        </ul>
        <SearchBar toggleSideNav={toggleSideNav}/>
      </nav>
      </div>
    </header>
  );
}

export default Header;
