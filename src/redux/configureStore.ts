import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducerWidgets } from './reducers/reducerWidgets';
import { reducerAuthUser } from './reducers/reducerAuthUser';
// import {initialState} from '../index'
// import { IState } from '../interfaces';

// TODO: upgrade to redux/toolbox
// TODO: figure out why Typescript does not like IState assigned to initialState
export default function configureStore(initialState: any) {
    return createStore(
        combineReducers({
            user: reducerAuthUser,
            widgets: reducerWidgets,
        }),
        initialState,
        applyMiddleware(thunk)
    );
}
