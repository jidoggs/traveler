export function checkLocation(params) {
    if (params === "/") {
      return "home";
    }
    if (params === "/hotels") {
      return "hotels";
    }
    if (params === "/weather") {
      return "weather";
    }
  }