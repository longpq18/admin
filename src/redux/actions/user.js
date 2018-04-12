
import * as types from './actionTypes';
import * as APIs from '../constants/serverAPI';
import Api from '../../libs/api'

// login
export function loginSuccess(token) {
  return { type: types.LOGIN_SUCCESS, token }
}

export function login(email, password) {
  return( dispatch, getState ) => {
    var params = {
      email: email,
      password: password
    }

    return Api.post(APIs.LOGIN, params).then(res => {
      console.log('Login res: ', res)
      dispatch(loginSuccess(res))
    }).catch(err => {
      console.log('Action login error: ', err)
    })
  }
}


// load all user
export function loadAllUserSuccess(user) {
  return {type: types.LOAD_ALL_USER_SUCCESS, user};
}

export function loadAllUserRequest(user) {
  return {type: types.LOAD_ALL_USER_REQUEST, user};
}

export function loadAllUserFailure(user) {
  return {type: types.LOAD_ALL_USER_FAILURE, user};
}

export function loadAllUser(token='') {
  return (dispatch, getState) => {
        dispatch(loadAllUserRequest());
        // var params = {
        //   token: token
        // }

        return Api.get(APIs.LOAD_ALL_USERS).then(response => {
            dispatch(loadAllUserSuccess(response));
        }).catch((ex) => {
            console.log(ex)
            dispatch(loadAllUserFailure())
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

// delete user
export function deleteUserSuccess(user) {
  return { type: types.DELETE_USER_SUCCESS, user }
}

export function deleteUser(id) {
  return (dispatch, getState) => {
    var params = {
      id: id
    }

    return Api.delete(APIs.DELETE_USER + id, params).then(user => {
      dispatch(deleteUserSuccess(user))
    }).catch(err => {
      console.log(err)
    })
  }
}

// update user
export function updateUserSuccess(user) {
  return { type: types.UPDATE_USER_SUCCESS }
}
