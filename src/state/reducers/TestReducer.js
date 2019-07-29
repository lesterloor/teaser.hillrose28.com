import { SET_TEST_ACTION } from "../actions"

const initialState = {
    tested: false
}

export default (state = initialState, action) => {
    if (action.type === SET_TEST_ACTION) {
        console.log("tested")
        state = {
            ...state,
            tested: true
        }
    }
    return state
}