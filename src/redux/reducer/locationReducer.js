import {
  ADD_USER_ATTRACTION,
  ADD_USER_HOTEL,
  ADD_USER_RESTURANT,
  ERROR_USER_ATTRACTION,
  ERROR_USER_HOTEL,
  ERROR_USER_RESTURANT,
  SET_LOCATION_LAT,
  SET_LOCATION_LONG,
} from "../types/locationTypes";

const initialState = {
  userLocation: {
    longitude: "",
    latitude: "",
  },
  userAttractions: {
    isLoading: true,
    error: null,
    data: [],
  },
  userHotels: {
    isLoading: true,
    error: null,
    data: [],
  },
  userResturants: {
    isLoading: true,
    error: null,
    data: [],
  },
};

export default function locationReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case SET_LOCATION_LONG:
      return {
        ...state,
        userLocation: { ...state.userLocation, longitude: payload },
      };
    case SET_LOCATION_LAT:
      return {
        ...state,
        userLocation: { ...state.userLocation, latitude: payload },
      };
    case ADD_USER_ATTRACTION:
      return {
        ...state,
        userAttractions: { isLoading: false, error: null, data: payload },
      };
    case ERROR_USER_ATTRACTION:
      return {
        ...state,
        userAttractions: { isLoading: false, error: payload, data: [] },
      };
    case ADD_USER_HOTEL:
      return {
        ...state,
        userHotels: { isLoading: false, error: null, data: payload },
      };
    case ERROR_USER_HOTEL:
      return {
        ...state,
        userHotels: { isLoading: false, error: payload, data: [] },
      };
    case ADD_USER_RESTURANT:
      return {
        ...state,
        userResturants: { isLoading: false, error: null, data: payload },
      };
    case ERROR_USER_RESTURANT:
      return {
        ...state,
        userResturants: { isLoading: false, error: payload, data: [] },
      };

    default:
      return state;
  }
}
