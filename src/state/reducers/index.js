import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import testReducer from "./TestReducer"
import { loginReducer, loginError } from "./AuthReducer"
import ContactForm from './EmailReducer'


const rootPersistConfig = {
    key: 'root',
    storage,
    blacklist: ['loginError']
}

const reducers = combineReducers({
    testReducer, loginReducer, loginError, ContactForm
})

export default persistReducer(rootPersistConfig, reducers)