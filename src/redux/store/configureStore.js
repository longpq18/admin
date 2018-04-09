import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });
export default function configureStore() {

  return createStore(
    reducer,
    applyMiddleware(thunk, logger)
  );
}
