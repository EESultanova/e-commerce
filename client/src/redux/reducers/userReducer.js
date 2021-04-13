import { ADD_GOOD_TO_USER_CART, ADD_ORDER_DETAILS, CHANGE_QUANTITY_USER, DELETE_GOOD_FROM_USER_CART, GET_ALL_ORDERS, GET_GOODS_SELLER } from "../types/userTypes";
import { SET_USER, REMOVE_USER } from "../types/topicsTypes";
// import { ADD_GOOD_TO_CART } from "../types/cartTypes";
import { SELLER_ADD_GOOD } from "../types/goodTypes";


const userReducer = (state = {} , action) => {
    switch (action.type) {
        case SET_USER:
            if (action.payload.user) {
                return {
                    // ...state,
                    // name: action.payload,
                    ...state,
                    ...action.payload.user,
                    // ...action.payload,
                    isAuth: true,
                }
            }
            // break

        case REMOVE_USER:
          localStorage.removeItem('token');
          return {
              ...state,
              name: '',
              avatar: '',
              isAuth: false
          }

        case ADD_ORDER_DETAILS:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }

        case SELLER_ADD_GOOD:
            return {
              ...state,
              goods : [...state.goods, action.payload]
            }
        
        case CHANGE_QUANTITY_USER:
          return {
            ...state,
            cart: state.cart.map(goodCart => {
              if (goodCart._id === action.id) {
                return {
                  ...goodCart,
                  quantity: action.quantity
                }
              }
              return goodCart
            })
          }
                

        case ADD_GOOD_TO_USER_CART:
          return {
            ...state,
            cart: [...state.cart, action.payload]
          }

        case DELETE_GOOD_FROM_USER_CART:
          return {
            ...state,
            cart: state.cart.filter(good => good._id !== action.payload)
          }

        // case SET_AVATAR:
        //     if (action.payload.user) {
        //         return {
        //             ...state,
        //             avatar: action.payload.user.avatar,
        //         }
        //     }
        // } else {
        //     localStorage.removeItem('token');
        //     return {
        //         ...state,
        //         name: '',
        //         isAuth: false
        //     }
        // }
        case GET_GOODS_SELLER:
          return {
            ...state,
            goods: [action.payload]
         }

         case GET_ALL_ORDERS:
          return {
            ...state,
            orders: [action.payload]
         }

        default:
            return state
    }
}

export default userReducer
