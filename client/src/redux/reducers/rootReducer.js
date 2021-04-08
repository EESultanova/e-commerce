import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import goodReducer from "./goodReducer";
import userReducer from './userReducer'


const rootReducer = combineReducers({
  categories: categoryReducer,
  goods: goodReducer,
  user: userReducer
})

export default rootReducer
