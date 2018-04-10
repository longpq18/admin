
import * as types from './actionTypes';
import * as APIs from '../constants/serverAPI';
import Api from '../../libs/api'

export function loadAllUserSuccess(user) {
  return {type: types.LOAD_ALL_USER_SUCCESS, user};
}

export function loadAllUser() {
  return (dispatch, getState) => {
        // dispatch(loadWalletRequest());

        return Api.get(APIs.LOAD_ALL_USERS).then(response => {
            dispatch(loadAllUserSuccess(response));
        }).catch((ex) => {
            console.log(ex)
        })
    }
}

// create user
export function creactUserSuccess(user) {
    return { type: types.CREATE_USER_SUCCESS, user }
}

export function createUser(email, password, status=1) {
  return (dispatch, getState) => {
    var params = {
      email: email,
      password: password,
      status: status
    }

    return Api.post(APIs.CREATE_USER, params).then(user => {
        dispatch(creactUserSuccess(user))
    }).catch(err => {
        console.log(err)
    })
  }
}
