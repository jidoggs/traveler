import React, { useState } from "react";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      console.log(searchQuery);
    }
    setSearchQuery("");
  };
  return (
    <form
      className="header__navigation--search header__searchBox searchBox  "
      onSubmit={searchSubmitHandler}
    >
      <label htmlFor="travelerSearch"></label>
      <input
        //   className="w-20"
        className="search"
        type="search"
        name="travelerSearch"
        id="travelerSearch"
        value={searchQuery}
        placeholder="Search recreation centers, flight..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">
        <span className="iconfont icon-search"></span>
      </button>
    </form>
  );
}

export default SearchBar;
