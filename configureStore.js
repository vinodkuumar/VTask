import {applyMiddleware,createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {verfiyAuth} from './src/actions/index';
import rootReducer from './src/reducers/index';

export default function configureStore(persistedState){
    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(thunkMiddleware)
    )
    store.dispatch(verfiyAuth())
    return store;
}