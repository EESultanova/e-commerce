import { SEARCH_CATEGORY } from "../types/searchTypes";

function searchCategoryReducer (state = '', action) {
  switch (action.type) {
    case SEARCH_CATEGORY:
      return action.payload
    default:
      return state
  }
}

export default searchCategoryReducer
