import { rootReducer } from './rootReducer'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from '../sagas'



const configureStore = () =>{

    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
    sagaMiddleware.run(rootSaga)
    // store.dispatch({type:'TEST'})
    return store;
};

export { configureStore } ;

