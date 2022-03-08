import React from "react";
import PlacesAutocomplete from "./PlacesAutocomplete";
import usePlacesAutocomplete from "use-places-autocomplete";
import { useDispatch } from "react-redux";
import { inputingSearch } from "../../redux/actions/searchActions";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const props = {
    className: "search",
    type: "search",
    name: "travelerSearch",
    id: "travelerSearch",
    placeholder: "Search the World . . . ",
  };

  const diapatch = useDispatch();
  const navigate = useNavigate();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const handleSelect = (val) => {
    setValue(val, false);
    diapatch(inputingSearch(val));
    navigate(`/search-result`);
    setValue("");
  };
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="header__navigation--search header__searchBox searchBox  ">
      <label htmlFor="travelerSearch"></label>
      <PlacesAutocomplete
        moreProps={props}
        handleSelect={handleSelect}
        handleInput={handleInput}
        status={status}
        data={data}
        value={value}
        ready={ready}
      />
      <button type="submit">
        <span className="iconfont icon-search"></span>
      </button>
    </form>
  );
}

export default SearchBar;
