import { FILTER_GOODS } from "../types/goodTypes";

function searchReducer (state = [], action) {
  switch (action.type) {
    case FILTER_GOODS:
      return action.payload
    default:
      return state
  }
}

export default searchReducer
