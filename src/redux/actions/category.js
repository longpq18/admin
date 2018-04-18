import * as types from './actionTypes';
import * as APIs from '../constants/serverAPI';
import Api from '../../libs/api'

function loadAllCategoryRequest() {
  return { type: types.LOAD_ALL_CATEGORY_REQUEST }
}

function loadAllCategorySuccess(cat) {
  return { type: types.LOAD_ALL_CATEGORY_SUCCESS, cat }
}

function loadAllUserFailure() {
  return { type: types.LOAD_ALL_CATEGORY_FAILURE }
}

export function loadAllCategory() {
  return ( dispatch, getState ) => {
    dispatch(loadAllCategoryRequest())
    return Api.get(APIs.LOAD_ALL_CATEGORY).then( res => {
        dispatch(loadAllCategorySuccess(res))
    }).catch(err => {
        dispatch(loadAllUserFailure())
        console.log('Load all category error: ', err)
    })
  }
}
