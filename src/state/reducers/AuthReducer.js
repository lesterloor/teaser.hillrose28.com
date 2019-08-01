import { SET_REFRESH_TOKEN, SET_LOGIN_ERROR, SET_LOG_OUT_USER } from "../actions"

const initialUserState = {
    user: null,
    refreshToken: null
}
const initialErrorState = {
    error: null,
    message: "",

}

export const loginReducer = (state = initialUserState, action) => {
    if (action.type === SET_REFRESH_TOKEN) {
        console.log("action.response", action.response)
        state = {
            ...state,
            user: action.response.user,
            refreshToken: action.response.user.refreshToken
        }
    } else if (action.type === SET_LOG_OUT_USER) {
        localStorage.clear()
        console.log("log out reducer")
        state = {
            ...state,
            user: null,
            refreshToken: null

        }
    }
    return state
}
export const loginError = (state = initialErrorState, action) => {
    if (action.type === SET_LOGIN_ERROR) {

        state = {
            ...state,
            error: action.response,
            message: action.response.message
        }
    }
    return state
}
export const logOutReducer = (state = initialUserState, action) => {

    if (action.type === SET_LOG_OUT_USER) {
        localStorage.clear()
        console.log("log out reducer")
        state = {
            ...state,
            user: null,
            refreshToken: null

        }
    }
    return state
}
