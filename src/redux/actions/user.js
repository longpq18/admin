
import * as types from './actionTypes';
import * as APIs from '../constants/serverAPI';
import Api from '../../libs/api'


// load all user
function loadAllUserSuccess(user) {
  return {type: types.LOAD_ALL_USER_SUCCESS, user};
}

function loadAllUserRequest(user) {
  return {type: types.LOAD_ALL_USER_REQUEST, user};
}

function loadAllUserFailure(user) {
  return {type: types.LOAD_ALL_USER_FAILURE, user};
}

export function loadAllUser(token='') {
  return (dispatch, getState) => {
        dispatch(loadAllUserRequest());
        return Api.get(APIs.LOAD_ALL_USERS).then(response => {
            dispatch(loadAllUserSuccess(response));
        }).catch((ex) => {
            console.log(ex)
            dispatch(loadAllUserFailure())
        })
    }
}

// create user
function creactUserSuccess(user) {
    return {
      type: types.CREATE_USER_SUCCESS, user
    }
}

export function createUser(email, password) {
  return (dispatch, getState) => {
    var params = {
      email: email,
      password: password
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
function updateUserSuccess(user) {
  return { type: types.UPDATE_USER_SUCCESS, user }
}

function updateUserRequest() {
  return { type: types.UPDATE_USER_REQUEST }
}

function updateUserFailure() {
  return { type: types.UPDATE_USER_FAILURE }
}

export function updateUser(id, email, password) {
  const params = {
    id: id,
    email: email,
    password: password
  }
  return (dispatch, getState) => {
    dispatch(updateUserRequest())
    return Api.put(APIs.UPDATE_USER + id, params).then(user => {
      console.log('updateUserRequest user: ', user)
      dispatch(updateUserSuccess(user))
    }).catch(err => {
      dispatch(updateUserFailure())
      console.log('updateUserFailure: ', err)
    })
  }
}

// get user info
function getUserInfoRequest(user) {
    return { type: types.GET_USER_INFO_REQUEST }
}

function getUserInfoSuccess(user) {
  return { type: types.GET_USER_INFO_SUCCESS, user }
}

function getUserInfoFailure(user) {
  return { type: types.GET_USER_INFO_FAILURE }
}

export function getUserInfo(id) {
  return( dispatch, getState ) => {

    dispatch(getUserInfoRequest())

    return Api.get(APIs.GET_USER_INFO + id).then(user => {
      dispatch(getUserInfoSuccess(user.result))
    }).catch(err => {
      console.log(err)
      dispatch(getUserInfoFailure())
    })
  }
}
