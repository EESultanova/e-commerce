import { ADD_GOOD, DELETE_GOOD, GET_GOODS } from "../types/goodTypes";

const goodReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GOODS: 
      return action.payload

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

    default:
      return state;
  }
}

export default goodReducer
