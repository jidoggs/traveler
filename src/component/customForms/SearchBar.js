import React from "react";
import PlacesAutocomplete from "./component/PlacesAutocomplete";
import usePlacesAutocomplete from "use-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import {
  clearingSearchResult,
  inputingSearch,
} from "../../redux/actions/searchActions";
import { useNavigate, useLocation } from "react-router-dom";
import { coronaDefault, weatherDefault } from "../../redux/actions/queryActions";

function SearchBar() {
  const props = {
    className: "search",
    type: "search",
    name: "travelerSearch",
    id: "travelerSearch",
    placeholder: "Search the World . . . ",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.searchReducer);
  const { pathname } = useLocation();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const handleSelect = (val) => {
    setValue(val, false);
    if (pathname === "/search-result" && state?.searchQuery === val) {
      setValue("");
      return;
    }
    if ( pathname === "/search-result" && state?.searchResult?.length > 0) {
      dispatch(clearingSearchResult());
      dispatch(weatherDefault())
      dispatch(coronaDefault())
    }
    dispatch(inputingSearch(val));
    navigate(`/search-result`);
    setValue("");
  };
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    console.log(e);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="header__navigation--search header__searchBox searchBox"
      autoComplete="off"
    >
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
