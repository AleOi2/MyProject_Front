import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducer/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/rootSaga'

const configureStore = () =>{
    const saga = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(saga)
        )
    )
    saga.run(rootSaga);
    return store;

}

export default configureStore;