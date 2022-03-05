import React, { useState } from "react";
import SearchLocationInput from "./PlacesAutoComplete";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      console.log(searchQuery);
    }
    setSearchQuery("");
  };
  const onChangeHandler = (e) => { setSearchQuery(e.target.value) }

  console.log(searchQuery)

  const props = {
    className: "search",
    type: "search",
    name: "travelerSearch",
    id: "travelerSearch",
    placeholder: "Search recreation centers, flight...",
  };


  return (
    <form
      className="header__navigation--search header__searchBox searchBox  "
      onSubmit={searchSubmitHandler}
    >
      <label htmlFor="travelerSearch"></label>
      <SearchLocationInput moreProps={props} value={searchQuery} onChangeHandler={onChangeHandler} setSearchQuery={setSearchQuery} />
      <button type="submit">
        <span className="iconfont icon-search"></span>
      </button>
    </form>
  );
}

export default SearchBar;
