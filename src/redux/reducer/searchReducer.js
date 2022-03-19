import {
  CLEAR_QUERY,
  CLEAR_SEARCH,
  ERROR_QUERY,
  SEARCH_INPUT,
  SEARCH_QUERY,
} from "../types/seachTypes";

const initialState = {
  searchQuery: "",
  searchResult: [],
  error: null,
};

export default function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SEARCH_INPUT:
      return { ...state, searchQuery: payload };
    case CLEAR_SEARCH:
      return { ...state, searchQuery: "" };
    case SEARCH_QUERY:
      return { ...state, searchResult: payload };
    case CLEAR_QUERY:
      return initialState;
    case ERROR_QUERY:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
