import actionTypes from './actionTypes';
const Truck = function ({ id, model, make, year, color }) {
    this.id = id;
    this.model = model;
    this.make = make;
    this.year = year;
    this.color = color;
};

export function actionCreateTruckSuccess(truck) {
    return { type: actionTypes.CREATE_TRUCK_SUCCESS, truck };
}

export function actionDeleteTruckSuccess(truckId) {
    return { type: actionTypes.DELETE_TRUCK_SUCCESS, truckId };
}

export function actionGetTrucksSuccess(trucks) {
    return { type: actionTypes.GET_TRUCKS_SUCCESS, trucks };
}

function apiGetTrucks() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve([
                new Truck({
                    id: 1,
                    model: 'Toyota',
                    make: 'Tacoma',
                    year: '2023',
                    color: 'Black',
                }),
                new Truck({
                    id: 2,
                    model: 'Ford',
                    make: 'Ranger',
                    year: '2023',
                    color: 'White',
                }),
            ]);
        }, 2000);
    });
}

export function getTrucks() {
    return function (dispatch) {
        return apiGetTrucks().then((trucks) =>
            dispatch(actionGetTrucksSuccess(trucks))
        );
    };
}

export function createTruck() {
    return function (dispatch) {
        return dispatch(
            actionCreateTruckSuccess(
                new Truck({
                    id: 3,
                    model: 'Dodge',
                    make: 'Ram',
                    year: '2001',
                    color: 'Black',
                })
            )
        );
    };
}

export function deleteTruck(truckId) {
    return function (dispatch) {
        return dispatch(actionDeleteTruckSuccess(truckId));
    };
}
