import { SEARCH_CATEGORY } from "../types/searchTypes"

export const setSearchCategoryRedux = (category) => {
  return {
    type: SEARCH_CATEGORY,
    payload: category
  }
}
