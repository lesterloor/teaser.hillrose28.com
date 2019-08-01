import { GET_CONTACT_FORM, RESET_CONTACT_FORM } from '.'

export const contactForm = (action) => {
    return {
        type: GET_CONTACT_FORM,
        payload: action
    }
}

export const contactFormReset = (action) => {
    return {
        type: RESET_CONTACT_FORM,
        payload: false
    }
}
