import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import testReducer from "./TestReducer"

const rootPersistConfig = {
    key: 'root',
    storage,
    blacklist: ['']
}

const reducers = combineReducers({
    testReducer
})

export default persistReducer(rootPersistConfig, reducers)