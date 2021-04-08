import { GET_CATEGORIES, ADD_CATEGORY, SELECTED_CATEGORY } from "../types/categoryTypes"

export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: categories
  }
}

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: category
  }
}

export const selectCategory = (category) => {
  return {
    type: SELECTED_CATEGORY,
    payload: category
  }
}
