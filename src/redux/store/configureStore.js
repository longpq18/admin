import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const middleWare = [];

middleWare.push(thunk);

const loggerMiddleware = createLogger({
    predicate: () =>  false //process.env.NODE_ENV === 'development'
});
middleWare.push(loggerMiddleware);

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(...middleWare)
    );
}
