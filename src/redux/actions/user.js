
import * as types from './actionTypes';
import * as APIs from '../constants/serverAPI';
import Api from '../../libs/api'

export function loadAllUserSuccess(user) {
  return {type: types.LOAD_ALL_USER_SUCCESS, user};
}

export function loadAllUser(token='123123123') {
  return (dispatch, getState) => {
        // dispatch(loadWalletRequest());
        var params = {
          token: token
        }

        return Api.get(APIs.LOAD_ALL_USERS, params).then(response => {
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
