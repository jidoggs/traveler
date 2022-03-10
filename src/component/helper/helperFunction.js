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

  export  const scrollTo = (ref) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }