import actionTypes from '../actions/actionTypes';

export function reducerCars(state = [], action) {
    switch (action.type) {
        case actionTypes.CREATE_CAR_SUCCESS:
            return [...state, { ...action.car }];

        case actionTypes.DELETE_CAR_SUCCESS:
            return state.filter((car) => car.id !== action.carId);

        case actionTypes.GET_CARS_SUCCESS:
            return action.cars; // dont need new state here

        default:
            return state;
    }
}
