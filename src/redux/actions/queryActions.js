import { CORONA_ERROR, CORONA_INPUT, RESET_CORONA, RESET_WEATHER, WEATHER_ERROR, WEATHER_INPUT } from "../types/queryTypes"

export const addingCorona = (payload) => ({ type: CORONA_INPUT, payload  })
export const errorCorona = (payload) => ({ type: CORONA_ERROR, payload  })
export const addingWeather = (payload) => ({ type: WEATHER_INPUT, payload  })
export const errorWeather = (payload) => ({ type: WEATHER_ERROR, payload  })
export const weatherDefault = () => ({ type: RESET_WEATHER })
export const coronaDefault = () => ({ type: RESET_CORONA })