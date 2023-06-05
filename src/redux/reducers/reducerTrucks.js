import actionTypes from '../actions/actionTypes';

export function reducerTrucks(state = [], action) {
    switch (action.type) {
        case actionTypes.CREATE_TRUCK_SUCCESS:
            return [...state, { ...action.truck }];

        case actionTypes.DELETE_TRUCK_SUCCESS:
            return state.filter((truck) => truck.id !== action.truckId);

        case actionTypes.GET_TRUCKS_SUCCESS:
            return action.trucks; // dont need new state here

        default:
            return state;
    }
}
