import * as types from './actionTypes';
import * as APIs from '../constants/serverAPI';
import Api from '../../libs/api'

// login
export function loginSuccess(login) {
  return { type: types.LOGIN_SUCCESS, login }
}

export function loginFailure(err) {
  return { type: types.LOGIN_FAILURE, err }
}

export function loginRequest() {
  return { type: types.LOGIN_REQUEST }
}

export function login(email, password) {
  return( dispatch, getState ) => {
    var params = {
      email: email,
      password: password
    }

    dispatch(loginRequest())

    return Api.post(APIs.LOGIN, params).then(res => {
      dispatch(loginSuccess(res))
    }).catch(err => {
      console.log('Action login error: ', err)
      dispatch(loginFailure(err))
    })
  }
}
