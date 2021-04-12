import { SELLER_ADD_GOOD } from "../types/goodTypes";
import { ADD_ORDER_DETAILS } from "../types/orderTypes";
import { SET_USER, REMOVE_USER } from "../types/topicsTypes";


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
            break

        case ADD_ORDER_DETAILS:
            return {
                ...state,
                orders: [action.payload]
            }

        case SELLER_ADD_GOOD:
            return {
              ...state,
              goods : [action.payload]
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

        case REMOVE_USER:
            localStorage.removeItem('token');
            return {
                ...state,
                name: '',
                avatar: '',
                isAuth: false
            }

        default:
            return state
    }
}

export default userReducer
