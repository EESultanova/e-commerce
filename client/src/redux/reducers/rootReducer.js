import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import goodReducer from "./goodReducer";
import languageReducer from "./languageReducer";
import loaderReducer from "./loaderReducer";
import searchCategoryReducer from "./searchCategoryReducer";
import searchReducer from "./searchReducer";
import userReducer from './userReducer'


const rootReducer = combineReducers({
  categories: categoryReducer,
  goods: goodReducer,
  user: userReducer,
  cart: cartReducer,
  search: searchReducer,
  loader: loaderReducer,
  language: languageReducer,
  searchcategory : searchCategoryReducer,
})

export default rootReducer
