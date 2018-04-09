import * as types from '../actions/actionTypes'
import initialState from './initialState'

function user(state=initialState.users, action) {
  switch (action.type) {
    case types.LOAD_ALL_USER_SUCCESS:
      return action.user
    default:
      return state
  }
}

export default user
