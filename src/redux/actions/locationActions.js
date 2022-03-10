import { ADD_USER_ATTRACTION, ADD_USER_HOTEL, ADD_USER_RESTURANT, ERROR_USER_ATTRACTION, ERROR_USER_HOTEL, ERROR_USER_RESTURANT, SET_LOCATION_LAT, SET_LOCATION_LONG } from "../types/locationTypes";

export const addingLongitude = (payload) => ({ type: SET_LOCATION_LONG, payload })
export const addingLatitude= (payload) => ({ type: SET_LOCATION_LAT, payload })

export const addAttractions = (payload) => ({ type: ADD_USER_ATTRACTION, payload })
export const errorAttractions = (payload) => ({ type: ERROR_USER_ATTRACTION, payload })
export const addHotels = (payload) => ({ type: ADD_USER_HOTEL, payload })
export const errorHotels = (payload) => ({ type: ERROR_USER_HOTEL, payload })
export const addResturants = (payload) => ({ type: ADD_USER_RESTURANT, payload })
export const errorResturants = (payload) => ({ type: ERROR_USER_RESTURANT, payload })