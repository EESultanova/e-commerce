import { ADD_GOOD_TO_USER_CART, ADD_ORDER_DETAILS, CHANGE_QUANTITY_USER, DELETE_GOOD_FROM_USER_CART, EMPTY_USER_CART, GET_ALL_ORDERS, GET_GOODS_SELLER, REMOVE_USER, SET_AVATAR, SET_USER } from "../types/userTypes"
import { SELLER_ADD_GOOD, SELLER_EDIT_GOOD } from "../types/goodTypes"
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
  total,
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
        total,
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

export const emptyUserCart = () => {
  return {
    type: EMPTY_USER_CART,
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
  return function (dispatch) {
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

export const sellerEditGood = (newGood) => {
  return {
    type: SELLER_EDIT_GOOD,
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

export const sellerEditGoodToServer = ({
  id,
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
    fetch(`${SITE_URL}api/v1/edit_new_good`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        name,
        quantity,
        price,
        description,
        category,
        photo,
        rating,
        user
      })
    }).then(response => response.status === 200 ? console.log('Ответ с сервера 200: товар изменен ') : console.log('Ответ с сервера 500: товар не изменен'))
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
  dispatch(getAllOrdersFromServer(result))
}

export const getAllOrdersFromServer = (orders) => {
  return {
    type: GET_ALL_ORDERS,
    payload: orders,
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const setAvatar = (avatar) => {
  return {
    type: SET_AVATAR,
    payload: avatar
  }
}

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  }
}
