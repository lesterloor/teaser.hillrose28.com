import { GET_REFRESH_TOKEN, LOG_OUT_USER } from "."

export const loginAction = values => {
    console.log("Log user in", values)
    return {
        type: GET_REFRESH_TOKEN,
        values
    }
}
export const logOut = () => {
    console.log("Log user out")
    return {
        type: LOG_OUT_USER,
    }

}