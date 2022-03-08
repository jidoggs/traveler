// export function inputingSearch(payload) {
//     return {
//         type:""

import { CLEAR_QUERY, CLEAR_SEARCH, SEARCH_INPUT, SEARCH_QUERY } from "../types/seachTypes";

//     }
// }

export const inputingSearch = (payload) => ({ type: SEARCH_INPUT, payload  })
export const clearingSearch = () => ({ type: CLEAR_SEARCH  })
export const addingSearchResult = (payload) => ({ type: SEARCH_QUERY, payload  })
export const clearingSearchResult = () => ({ type: CLEAR_QUERY  })