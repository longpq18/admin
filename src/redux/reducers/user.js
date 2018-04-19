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
  userDetail: null,
  error: null,

  getAllUserInfoRequest: false,
  getAllUserInfoDone: false,
  getUserInfoRequest: false,
  getUserInfoDone: false,
  getUpdateUserRequest: false,
  getUpdateUserDone: false,
}

// get all users
function getAllUserInfoRequest(state, action) {
    return updateObject(state, {
        getAllUserInfoRequest: true,
        getAllUserInfoDone: false,
        error: null,
    });
}

function getAllUserInfoFailure(state, action) {
    return updateObject(state, {
        getAllUserInfoRequest: false,
        getAllUserInfoDone: false,
        error: action.error,
    });
}

function getAllUserInfoSuccess(state, action) {
    console.log('getAllUserInfoSuccess action: ', action.user)
    return updateObject(state, {
        getAllUserInfoRequest: false,
        getAllUserInfoDone: true,
        userData: action.user,
        error: null,
    });
}

// get user info
function getUserInfoRequest(state, action) {
    return updateObject(state, {
        getUserInfoRequest: true,
        getUserInfoDone: false,
        error: null,
    });
}

function getUserInfoFailure(state, action) {
    return updateObject(state, {
        getUserInfoRequest: false,
        getUserInfoDone: false,
        error: action.error,
    });
}

function getUserInfoSuccess(state, action) {
    console.log('getUserInfoSuccess action: ', action.user)
    return updateObject(state, {
        getUserInfoRequest: false,
        getUserInfoDone: true,
        userDetail: action.user,
        error: null,
    });
}

// update user
function getUpdateUserRequest(state, action) {
    return updateObject(state, {
      getUpdateUserRequest: true,
      getUpdateUserDone: false,
      error: null
    })
}

function getUpdateUserFailure(state, action) {
    return updateObject(state, {
      getUpdateUserRequest: false,
      getUpdateUserDone: false,
      error: action.error
    })
}

function getUpdateUserSuccess(state, action) {
    const id = action.user.id
    console.log('getUpdateUserSuccess action: ', action)

    return updateObject(state, {
      getUpdateUserRequest: false,
      getUpdateUserDone: true,
      userData: action.user
    })
}

const userReducer = createReducer(initState, {
  [types.LOAD_ALL_USER_REQUEST]: getAllUserInfoRequest,
  [types.LOAD_ALL_USER_SUCCESS]: getAllUserInfoSuccess,
  [types.LOAD_ALL_USER_FAILURE]: getAllUserInfoFailure,
  [types.GET_USER_INFO_REQUEST]: getUserInfoRequest,
  [types.GET_USER_INFO_SUCCESS]: getUserInfoSuccess,
  [types.GET_USER_INFO_FAILURE]: getUserInfoFailure,
  [types.UPDATE_USER_REQUEST]: getUpdateUserRequest,
  [types.UPDATE_USER_SUCCESS]: getUpdateUserSuccess,
  [types.UPDATE_USER_FAILURE]: getUpdateUserFailure,
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
