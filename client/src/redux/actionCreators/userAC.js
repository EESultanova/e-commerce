import { SELLER_ADD_GOOD } from "../types/goodTypes"
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

export const sellerAddGood = (newGood) => {
  return {
    type: SELLER_ADD_GOOD,
    payload: newGood,
  };
};

export const sellerAddGoodToServer = ({
  name,
  quantity,
  price,
  description,
  category,
  photo,
  rating,
  user
}) => {
  console.log('category------_>', category)
  return (
    fetch('http://localhost:3001/api/v1/add_new_good', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        name,
        quantity,
        price,
        description,
        category,
        photo,
        rating,
        user
      })
    }).then(response => response.status === 200 ? console.log('Ответ с сервера 200: товар добавлен ') : console.log('Ответ с сервера 500: товар не добавлен')) 
  )
};

