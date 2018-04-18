import {combineReducers} from 'redux'
import userReducer from './user'
import accountReducer from './account'
import categoryReducer from './category'

const rootReducer = combineReducers({
    user: userReducer,
    account: accountReducer,
    category: categoryReducer
});

export default rootReducer
