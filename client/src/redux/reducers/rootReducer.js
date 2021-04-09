import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import goodReducer from "./goodReducer";
import userReducer from './userReducer'


const rootReducer = combineReducers({
  categories: categoryReducer,
  goods: goodReducer,
  user: userReducer,
  cart: cartReducer
})

export default rootReducer
