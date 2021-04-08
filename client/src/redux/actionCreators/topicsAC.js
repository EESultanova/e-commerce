import { SET_AVATAR, SET_USER, REMOVE_USER } from "../types/topicsTypes"


export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const setAvatar = (avatar) => {
    return {
        type: SET_AVATAR,
        payload: avatar
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}