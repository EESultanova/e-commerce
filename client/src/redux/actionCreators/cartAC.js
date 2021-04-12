import { ADD_GOOD_TO_CART, CHANGE_QUANTITY, DELETE_GOOD_FROM_CART, EMPTY_CART } from "../types/cartTypes"

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

export const changeQuantity = (id, quantity) => {
  return function(dispatch) {
    dispatch({
      type: CHANGE_QUANTITY,
      id,
      quantity
    })
  }
}

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  }
}
