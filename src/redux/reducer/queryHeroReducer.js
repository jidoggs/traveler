import { CORONA_ERROR, CORONA_INPUT, RESET_CORONA, RESET_WEATHER, WEATHER_ERROR, WEATHER_INPUT } from "../types/queryTypes"

const initialState = {
    corona: {
        isLoading: true,
        error: null,
        data:{}
    },
    weather: {
        isLoading: true,
        error: null,
        data:{}
    },
}

export default function queryHeroReducer (state = initialState, { type, payload }) {
  switch (type) {

  case CORONA_INPUT:
    return { ...state, corona: {
        isLoading: false,
        error: null,
        data: payload
    } }
  case CORONA_ERROR:
    return { ...state, corona: {
        isLoading: false,
        data: {},
        error: payload
    } }
  case WEATHER_INPUT:
    return { ...state, weather: {
        isLoading: false,
        error: null,
        data: payload
    } }
  case WEATHER_ERROR:
    return { ...state, weather: {
        isLoading: false,
        data: {},
        error: payload
    } }
  case RESET_WEATHER:
    return initialState.weather
  case RESET_CORONA:
    return initialState.corona

  default:
    return state
  }
}
