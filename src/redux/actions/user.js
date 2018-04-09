// import * as types from './actionTypes';
// import catApi from '../api/user';
//
// const initState = {
//   loadingALlUser: false,
//   data: null,
//   error: null
// }
//
// export function loadAllUserSuccess(result) {
//   return {
//     type: types.LOAD_ALL_USER_SUCCESS,
//     result
//   };
// }
//
// export function LoadingAllUser() {
//   return { type: types.LOADING_ALL_USER }
// }
import * as types from './actionTypes';
import Apis from '../api/user';

export function loadAllUserSuccess(user) {
  return {type: types.LOAD_ALL_USER_SUCCESS, user};
}

export function loadAllUser() {
  return function(dispatch) {
    return Apis.getAllUsers().then(user => {
      console.log('loadAllUser: ', user)
      dispatch(loadAllUserSuccess(user));

    }).catch(error => {
      throw(error);
    });
  };
}
