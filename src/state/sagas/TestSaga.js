import { put } from "redux-saga/effects"
import { SET_TEST_ACTION } from "../actions"
export function* testSaga(action) {
    try {
        console.log("saga", action)
        yield put({
            type: SET_TEST_ACTION,
        })
    }
    catch (err) {
        console.log("err", err)
    }
}