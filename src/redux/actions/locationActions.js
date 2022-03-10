import { SET_LOCATION_LAT, SET_LOCATION_LONG } from "../types/locationTypes";

export const addingLongitude = (payload) => ({ type: SET_LOCATION_LONG, payload })
export const addingLatitude= (payload) => ({ type: SET_LOCATION_LAT, payload })