import { ADD_GOOD, DELETE_GOOD, GET_GOODS } from "../types/goodTypes"

export const getGoods = (goods) => {
  return {
    type: GET_GOODS,
    payload: goods
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
    fetch(`http://localhost:3001/api/v1/category/${id}`)
    .then(response => response.json())
    .then(goodsFromServer => dispatch(getGoods(goodsFromServer)))
  }
}


