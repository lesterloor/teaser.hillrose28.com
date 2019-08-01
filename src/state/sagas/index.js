import { all, takeLatest } from "redux-saga/effects"

import { TEST_ACTION, GET_REFRESH_TOKEN, LOG_OUT_USER, RESET_CONTACT_FORM, GET_CONTACT_FORM } from "../actions"
import { testSaga } from "./TestSaga"
import { loginSaga, logOutSaga } from "./AuthSaga"
import { contactForm, contactFormReset } from "./EmailSaga"

export default function* () {
    yield all([
        takeLatest(TEST_ACTION, testSaga),
        takeLatest(LOG_OUT_USER, logOutSaga),
        takeLatest(GET_CONTACT_FORM, contactForm),
        takeLatest(RESET_CONTACT_FORM, contactFormReset),
        takeLatest(GET_REFRESH_TOKEN, loginSaga)])
}