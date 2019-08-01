import { SET_CONTACT_FORM } from '../actions'

const initialState = {
    sent: false
}

export default (state = initialState, action) => {
    if (action.type === SET_CONTACT_FORM) {
        console.log("set contact form reducer", action.payload)

        state = {
            ...state,
            sent: action.payload.sent
        }
    }
    // else if (action.type === SET_CONTACT_FORM) {
    //     state = {
    //         ...state,
    //         sent: true
    //     }
    // }

    return state
}

// 1GoTGxpcLUzvvn9c4eJ4mJlcEL
