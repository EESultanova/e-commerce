const { ADD_GOOD_TO_CART, DELETE_GOOD_FROM_CART, CHANGE_QUANTITY } = require("../types/cartTypes");

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
        action.payload
      ]

    case DELETE_GOOD_FROM_CART:
      console.log(action.payload)
      return state.filter(good => good._id !== action.payload)
    
    default:
      return state
  }
}

export default cartReducer
