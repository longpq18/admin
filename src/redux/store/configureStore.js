import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });
export default function configureStore(initialState) {

  let store = createStore(
    reducer,
    compose(applyMiddleware(thunk, logger))
  )
  persistStore(store, {storage: storage})
  return store
}
