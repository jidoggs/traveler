import { SET_LOCATION_LAT, SET_LOCATION_LONG } from "../types/locationTypes"

const initialState = {
    userLocation: {
        longitude:"",
        latitude:""
    },
}

export default function locationReducer (state = initialState, { type, payload }) {
  switch (type) {

  case SET_LOCATION_LONG:
    return { ...state, userLocation: {...state.userLocation, longitude: payload} }
  case SET_LOCATION_LAT:
    return { ...state, userLocation: {...state.userLocation, latitude: payload} }
  

  default:
    return state
  }
}
