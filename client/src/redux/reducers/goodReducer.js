import { ADD_GOOD, CHANGE_GOOD_QUANTITY, DELETE_GOOD, GET_GOOD, GET_GOODS, SELLER_ADD_GOOD, SELLER_EDIT_GOOD } from "../types/goodTypes";

const goodReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GOODS:
      return {
        ...state,
        goods: action.payload
      }

    case GET_GOOD:
      return {
        ...state,
        good: action.payload
      }

    case ADD_GOOD:
      return {
        ...state,
        goods: [...state.goods, action.payload]
      }

    case DELETE_GOOD:
      return {
        ...state,
        goods: state.filter(good => good._id !== action.payload)
      }

    case CHANGE_GOOD_QUANTITY:
      return {
        ...state,
        goods: state.map(good => {
          if (good._id === action.id) {
            return {
              ...good,
              quantity: action.quantity
            }
          }
          return good
        })
      }

    case SELLER_ADD_GOOD:
      return {
        newGood: action.payload
      }

    case SELLER_EDIT_GOOD:
      return {
        newGood: action.payload
      }

    default:
      return state;
  }
}

export default goodReducer
