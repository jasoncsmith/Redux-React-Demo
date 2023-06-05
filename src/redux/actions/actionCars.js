import actionTypes from './actionTypes';

const Car = function ({ id, model, make, year, color }) {
    this.id = id;
    this.model = model;
    this.make = make;
    this.year = year;
    this.color = color;
};

export function actionCreateCarSuccess(car) {
    return { type: actionTypes.CREATE_CAR_SUCCESS, car };
}

export function actionDeleteCarSuccess(carId) {
    return { type: actionTypes.DELETE_CAR_SUCCESS, carId };
}

export function actionGetCarsSuccess(cars) {
    return { type: actionTypes.GET_CARS_SUCCESS, cars };
}

// ASYNC
function apiGetCars() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve([
                new Car({
                    id: 1,
                    make: 'Chevy',
                    model: 'Corvette',
                    year: '2023',
                    color: 'Black',
                }),
                new Car({
                    id: 2,
                    make: 'Acura',
                    model: 'NSX',
                    year: '2023',
                    color: 'White',
                }),
            ]);
        }, 1000);
    });
}

// ASYNC
function apiCreateCar() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(
                new Car({
                    id: 3,
                    make: 'Lamborghini',
                    model: 'Countach',
                    year: '2001',
                    color: 'Black',
                })
            );
        }, 1000);
    });
}

// ASYNC
export function getCars() {
    return function (dispatch) {
        return apiGetCars().then((cars) =>
            dispatch(actionGetCarsSuccess(cars))
        );
    };
}

// ASYNC
export function createCar() {
    return function (dispatch) {
        return apiCreateCar().then((car) =>
            dispatch(actionCreateCarSuccess(car))
        );
    };
}

// SYNC
export function deleteCar(carId) {
    return function (dispatch) {
        dispatch(actionDeleteCarSuccess(carId));
    };
}
