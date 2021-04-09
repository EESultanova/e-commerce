import { GET_CATEGORIES } from "../types/categoryTypes"

export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: categories
  }
}

export const getCategoriesFromServer = async (dispatch) => {
  fetch('http://localhost:3001/api/v1/')
    .then(response => response.json())
    .then(categoriesFromServer => dispatch(getCategories(categoriesFromServer)))
}

