import { all, takeLatest } from "redux-saga/effects"

import { TEST_ACTION } from "../actions"
import { testSaga } from "./TestSaga"

export default function* () {
    yield all([takeLatest(TEST_ACTION, testSaga)])
}