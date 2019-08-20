import { call, put, } from 'redux-saga/effects'
import * as emailjs from 'emailjs-com';
import { SET_CONTACT_FORM } from '../actions'

export function* contactForm (action) {
    try {
        const params = action.payload

        const templateParams = {
            ...params,
            broker: params.broker ? 'Yes' : 'No'
        }

        const emailResponse = yield call(emailjs.send, 'amazon_ses', 'auto_response', templateParams, process.env.REACT_APP_EMAILJS_USERID)
        
        yield call(emailjs.send, 'amazon_ses', 'contact_email', templateParams, process.env.REACT_APP_EMAILJS_USERID)

        const success = emailResponse.text

        yield put({
            type: SET_CONTACT_FORM,
            payload: {
                sent: success === "OK" ? true : false
            }
        })
    }
    catch (error) {
        //
    }
}
export function* contactFormReset(action) {
    console.log("form reset")
    try {

        yield put({
            type: SET_CONTACT_FORM,
            payload: {
                sent: false
            }
        })
    }
    catch (error) {
        //
    }
}
