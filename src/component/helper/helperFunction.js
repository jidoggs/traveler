export function checkLocation(params) {
    if (params === "/") {
      return "home";
    }
    if (params === "/hotels") {
      return "hotels";
    }
    if (params === "/attractions") {
      return "attractions";
    }
    if (params === "/restaurants") {
      return "restaurants";
    }
    if (params === "/search-result") {
      return "searchResult";
    }
  }