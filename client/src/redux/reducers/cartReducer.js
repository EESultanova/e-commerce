const { ADD_GOOD_TO_CART, DELETE_GOOD_FROM_CART, CHANGE_QUANTITY, EMPTY_CART } = require("../types/cartTypes");

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGE_QUANTITY:
      return state.map(goodCart => {
        if (goodCart._id === action.id) {
          return {
            ...goodCart,
            quantity: action.quantity
          }
        }
        return goodCart
      })

    case ADD_GOOD_TO_CART:
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        }
      ]

    case DELETE_GOOD_FROM_CART:
      console.log(action.payload)
      return state.filter(good => good._id !== action.payload)

    case EMPTY_CART:
        return []
    
    default:
      return state
  }
}

export default cartReducer
