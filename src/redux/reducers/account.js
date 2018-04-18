import * as types from '../actions/actionTypes'
import {createReducer, updateObject} from './reducerUtilities.js'

/***
  1- Login
  2- Register
***/

const initState = {
  token: null,
  error: null,
  isLoginRequest: false,
  isLoginDone: false,
}

// get all users
function loginRequest(state, action) {
    return updateObject(state, {
        isLoginRequest: true,
        isLoginDone: false,
        error: null,
    });
}

function loginFailure(state, action) {
    return updateObject(state, {
        isLoginRequest: false,
        isLoginDone: false,
        error: action.error,
    });
}

function loginSuccess(state, action) {
    return updateObject(state, {
        isLoginRequest: false,
        isLoginDone: true,
        token: action.login.token,
        error: null,
    });
}

const accountReducer = createReducer(initState, {
  [types.LOGIN_REQUEST]: loginRequest,
  [types.LOGIN_SUCCESS]: loginSuccess,
  [types.LOGIN_FAILURE]: loginFailure
});

export default accountReducer
