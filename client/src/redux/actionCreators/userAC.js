import { ADD_ORDER_DETAILS } from "../types/orderTypes"

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

