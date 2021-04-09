import { ADD_GOOD_TO_CART, DECREASE_QUANTITY, DELETE_GOOD_FROM_CART, INCREASE_QUANTITY } from "../types/cartTypes"

export const addGoodToCart = (good) => {
  return {
    type: ADD_GOOD_TO_CART,
    payload: good
  }
}

export const deleteGoodFromCart = (good) => {
  return {
    type: DELETE_GOOD_FROM_CART,
    payload: good
  }
}

export const increaseGoodQuantity = (id) => {
  console.log('increase', id)
  return {
    type: INCREASE_QUANTITY,
    payload: id
  }
}

export const decreaseGoodQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: id
  }
}
