import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import goodReducer from "./goodReducer";
import loaderReducer from "./loaderReducer";
import searchReducer from "./searchReducer";
import userReducer from './userReducer'


const rootReducer = combineReducers({
  categories: categoryReducer,
  goods: goodReducer,
  user: userReducer,
  cart: cartReducer,
  search: searchReducer,
  loader: loaderReducer
})

export default rootReducer
