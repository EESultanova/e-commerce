const { ADD_GOOD_TO_CART, DELETE_GOOD_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } = require("../types/cartTypes");

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      console.log('hello')
      return state.map(goodCart => {
        console.log(goodCart._id)
        console.log(action.payload)
        if (goodCart._id === action.payload) {
          console.log('bye')
          return {
            ...goodCart,
            quantity: goodCart.quantity + 1
          }
        }
        console.log('one', goodCart)
        console.log('two', action.payload)
        return goodCart
      })

    case ADD_GOOD_TO_CART:
      return [
        ...state,
        action.payload
      ]

    case DELETE_GOOD_FROM_CART:
      return state.filter(good => good._id !== action.payload)

      case DECREASE_QUANTITY:
        return state.map(good => {
          if (good._id === action.payload) {
            return {
              ...good,
              quantity: good.quantity -= 1
            }
          }
          return good
        })
    
    default:
      return state
  }
}

export default cartReducer
