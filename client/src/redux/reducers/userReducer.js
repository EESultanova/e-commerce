import { SET_USER, CHANGE_POINTS, REMOVE_USER, SET_AVATAR } from "../types/topicsTypes";


const userReducer = (state = {}, action) => {
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
                isAuth: false
            }

        default:
            return state
    }
}

export default userReducer