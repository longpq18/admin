import * as types from '../actions/actionTypes'
import {createReducer, updateObject} from './reducerUtilities.js'

/***
  1- Load all user
  2- Add user
  3- Update user
  4- Delete user
***/

const initState = {
  userData: null,
  error: null,
  getingAllUserInfo: false,
  getUserInfoDone: false
}

function getAllUserInfoRequest(state, action) {
    return updateObject(state, {
        getingAllUserInfo: true,
        getUserInfoDone: false,
        error: null,
    });
}

function getAllUserInfoFailure(state, action) {
    return updateObject(state, {
        getingAllUserInfo: false,
        getUserInfoDone: false,
        error: action.error,
    });
}

function getAllUserInfoSuccess(state, action) {
    console.log('getAllUserInfoSuccess action: ', action.user)
    return updateObject(state, {
        getingAllUserInfo: false,
        getUserInfoDone: true,
        userData: action.user,
        error: null,
    });
}

const userReducer = createReducer(initState, {
  [types.LOAD_ALL_USER_REQUEST]: getAllUserInfoRequest,
  [types.LOAD_ALL_USER_SUCCESS]: getAllUserInfoSuccess,
  [types.LOAD_ALL_USER_FAILURE]: getAllUserInfoFailure
});

export default userReducer


// function user(state=initialState.users, action) {
//   switch (action.type) {
//     case types.LOAD_ALL_USER_SUCCESS:
//       return action.user
//     case types.CREATE_USER_SUCCESS:
//       return action.user
//     default:
//       return state
//   }
// }
//
// export default user
