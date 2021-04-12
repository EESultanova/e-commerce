import { ADD_GOOD_TO_USER_CART, ADD_ORDER_DETAILS, CHANGE_QUANTITY_USER, DELETE_GOOD_FROM_USER_CART } from "../types/userTypes"

export const addOrderDetails = (order) => {
  return {
    type: ADD_ORDER_DETAILS,
    payload: order
  }
}

export const addOrderDetailsToServer = (
  {fioToServer,
  addressToServer,
  email,
  phone,
  card,
  cardName,
  expMonth,
  expYear,
  cvv,
  currentCart,
  currentUser}) => {
  return  (
    fetch('http://localhost:3001/api/v1/order', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        fioToServer,
        addressToServer,
        email,
        phone,
        card,
        cardName,
        expMonth,
        expYear,
        cvv,
        currentCart,
        currentUser,
      })
    }).then(response => response.status === 200 ? console.log('Ответ с сервера 200: заказ добавлен ') : console.log('Ответ с сервера 500: заказ не добавлен')) 
  )
}

export const addGoodToUserCart = (good) => {
  return {
    type: ADD_GOOD_TO_USER_CART,
    payload: good
  }
}

export const deleteGoodFromUserCart = (good) => {
  console.log(good, "Delete good User")
  return {
    type: DELETE_GOOD_FROM_USER_CART,
    payload: good
  }
}

export const changeQuantityUserCart = (id, quantity) => {
  console.log(quantity, "Change quantity user")
  return function(dispatch) {
    dispatch({
      type: CHANGE_QUANTITY_USER,
      id,
      quantity
    })
  }
}
