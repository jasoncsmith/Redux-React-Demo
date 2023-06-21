import actionTypes from './actionTypes';
import { apiGetAuthUser } from '../../apis/apiUser';
import { ThunkActionDispatch } from 'redux-thunk';
import { IUser } from '../../interfaces';

export function actionLoadUser(user: IUser) {
    return { type: actionTypes.LOAD_USER, user };
}

export function actionUpdateUser(user: IUser) {
    return { type: actionTypes.UPDATE_USER, user };
}

export function actionUpdateUserPrefsHiddenWidgetsAdd(id: number) {
    return { type: actionTypes.UPDATE_USER_PREFS_HIDDEN_WIDGETS_ADD, id };
}

function actionUpdateUserPrefWidgetBackground(obj: {
    id: number;
    color: string;
}) {
    return { type: 'UPDATE_WIDGET_BACKGROUND', bgs: obj };
}

export function actionUpdateUserPrefsHiddenWidgetsRemove(id: number) {
    return {
        type: actionTypes.UPDATE_USER_PREFS_HIDDEN_WIDGETS_REMOVE,
        id,
    };
}

export function actionUpdateUserPrefFavoriteWidgets(prefs: number[]) {
    return {
        type: actionTypes.UPDATE_USER_PREFS_FAVORITE_WIDGETS,
        prefs: prefs,
    };
}

export function updateUserPrefHiddenWidgetsRemove(id: number) {
    return function (dispatch: ThunkActionDispatch<any>) {
        return dispatch(actionUpdateUserPrefsHiddenWidgetsRemove(id));
    };
}

export function updateUserPrefHiddenWidgetsAdd(id: number) {
    return function (dispatch: ThunkActionDispatch<any>) {
        return dispatch(actionUpdateUserPrefsHiddenWidgetsAdd(id));
    };
}

export function toggleUserPrefFavoriteWidgets(arr: number[], id: number) {
    let payload: number[] = [];
    if (arr.indexOf(id) !== -1) {
        payload = arr.filter((currId) => currId !== id);
    } else {
        payload = [...arr, id];
    }

    return function (dispatch: ThunkActionDispatch<any>) {
        return dispatch(actionUpdateUserPrefFavoriteWidgets(payload));
    };
}

export function updateUserPrefWidgetBackground(obj: {
    id: number;
    color: string;
}) {
    return function (dispatch: ThunkActionDispatch<any>) {
        return dispatch(actionUpdateUserPrefWidgetBackground(obj));
    };
}

export function getAuthUser() {
    return function (dispatch: ThunkActionDispatch<any>) {
        return apiGetAuthUser().then((user) => {
            return dispatch(actionLoadUser(user));
        });
    };
}
