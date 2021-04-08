import { ADD_GOOD, DELETE_GOOD, GET_GOOD, GET_GOODS } from "../types/goodTypes"

export const getGoods = (goods) => {
  return {
    type: GET_GOODS,
    payload: goods
  }
}

export const getGood = (good) => {
  return {
    type: GET_GOOD,
    payload: good
  }
}

export const addGood = (good) => {
  return {
    type: ADD_GOOD,
    payload: good
  }
}

export const deleteGood = (good) => {
  return {
    type: DELETE_GOOD,
    payload: good
  }
}

export const getGoodsFromServer = (id) => {
  return dispatch => {
    fetch(`http://localhost:3001/api/v1/categories/${id}`)
    .then(response => response.json())
    .then(goodsFromServer => dispatch(getGoods(goodsFromServer)))
  }
}

export const getGoodDetailsFromServer = (id) => {
  return dispatch => {
    fetch(`http://localhost:3001/api/v1/goods/${id}`)
      .then(response => response.json())
      .then(oneGoodFromServer => dispatch(getGood(oneGoodFromServer)))
  }
}
