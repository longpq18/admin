import * as types from '../actions/actionTypes'
import {createReducer, updateObject} from './reducerUtilities.js'

const initState = {
  catData: null,
  error: null,

  getAllCatRequest: false,
  getAllCatDone: false,
}

// get all users
function getAllCategoryRequest(state, action) {
    return updateObject(state, {
        getAllCatRequest: true,
        getAllCatDone: false,
        error: null,
    });
}

function getAllCategoryFailure(state, action) {
    return updateObject(state, {
        getAllCatRequest: false,
        getAllCatDone: false,
        error: action.error,
    });
}

function getAllCategorySuccess(state, action) {
    return updateObject(state, {
        getAllCatRequest: false,
        getAllCatDone: true,
        catData: action.cat.result,
        error: null,
    });
}

const userReducer = createReducer(initState, {
  [types.LOAD_ALL_CATEGORY_REQUEST]: getAllCategoryRequest,
  [types.LOAD_ALL_CATEGORY_SUCCESS]: getAllCategorySuccess,
  [types.LOAD_ALL_CATEGORY_FAILURE]: getAllCategoryFailure,
});

export default userReducer
