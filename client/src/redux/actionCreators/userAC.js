import { ADD_GOOD_TO_USER_CART, ADD_ORDER_DETAILS, CHANGE_QUANTITY_USER, DELETE_GOOD_FROM_USER_CART, GET_ALL_ORDERS, GET_GOODS_SELLER} from "../types/userTypes"
import { SELLER_ADD_GOOD } from "../types/goodTypes"
import { SITE_URL } from "../../config"

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
    fetch(`${SITE_URL}api/v1/order`, {
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
    }).then(response => response.status === 200 ? console.log('Ответ с сервера 200: заказ добавлен ') : console.log('Ответ с сервера', response.status, ': мало товара')) 
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
  return (
    fetch(`${SITE_URL}api/v1/add_new_good`, {
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


export const getSellerGoods = (user) => async (dispatch) => {
  const response = await fetch(`${SITE_URL}api/v1/get_goods_for_seller?_s=${user}`)
  const result = await response.json()
  dispatch(getSellerGoodsFromServer(result))
};

export const getSellerGoodsFromServer = (goods) => {
  return {
    type: GET_GOODS_SELLER,
    payload: goods,
  };
};

export const getAllOrders = (user) => async (dispatch) => {
  const response = await fetch(`${SITE_URL}api/v1/get_all_orders?_s=${user}`)
  const result = await response.json()
  console.log(result)
  dispatch(getAllOrdersFromServer(result))
}

export const getAllOrdersFromServer = (orders) => {
  return {
    type: GET_ALL_ORDERS,
    payload: orders,
  };
};
