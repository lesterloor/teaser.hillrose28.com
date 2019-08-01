import { call, put } from "redux-saga/effects"
import { SET_REFRESH_TOKEN, SET_LOGIN_ERROR, SET_LOG_OUT_USER } from "../actions"
import * as firebase from 'firebase/app';

export function* loginSaga(action) {
    try {
        const { email, password } = action.values

        const auth = firebase.auth()
        const response = yield call(
            [auth, auth.signInWithEmailAndPassword],
            email,
            password
        )

        yield put({
            type: SET_REFRESH_TOKEN,
            response,
        })
    }
    catch (response) {
        yield put({
            type: SET_LOGIN_ERROR,
            response,
        })
    }
}
export function* logOutSaga() {
    try {
        localStorage.clear()
        const auth = firebase.auth()
        yield call(
            [auth, auth.signOut])
        yield put({
            type: SET_LOG_OUT_USER,
        })
    }
    catch (error) {
        yield put({
            type: SET_LOG_OUT_USER,
        })
    }

}