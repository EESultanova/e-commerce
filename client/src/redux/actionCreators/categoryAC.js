import { SITE_URL } from "../../config"
import { GET_CATEGORIES } from "../types/categoryTypes"
import { hideLoader, showLoader } from "./loaderAC"

export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: categories
  }
}

export const getCategoriesFromServer = () => async (dispatch) => {
  fetch('http://localhost:3001/api/v1/')
    .then(response => response.json())
    .then(categoriesFromServer => {
      dispatch(getCategories(categoriesFromServer))
    })
}

// fetch('http://localhost:3001/api/v1/')
// .then(response => response.json())
// .then(categoriesFromServer => {
//   dispatch(getCategories(categoriesFromServer))
//   // dispatch(hideLoader())
// })


// dispatch(showLoader())
// fetch('http://localhost:3001/api/v1/')
//   .then(response => response.json())
//   .then(categoriesFromServer => {
//     dispatch(getCategories(categoriesFromServer))
//     dispatch(hideLoader())
//   })
