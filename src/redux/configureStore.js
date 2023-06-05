import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducerTrucks } from './reducers/reducerTrucks';
import { reducerCars } from './reducers/reducerCars';

export default function configureStore(initialState) {
    return createStore(
        combineReducers({ cars: reducerCars, trucks: reducerTrucks }),
        initialState,
        applyMiddleware(thunk)
    );
}
