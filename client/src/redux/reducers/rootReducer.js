import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import goodReducer from "./goodReducer";


const rootReducer = combineReducers({
  categories: categoryReducer,
  goods: goodReducer,
})

export default rootReducer
