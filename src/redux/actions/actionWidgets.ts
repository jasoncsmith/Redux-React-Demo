import { ThunkActionDispatch } from 'redux-thunk';
import { apiGetWidgets } from '../../apis/apiWidgets';
import { IWidget } from '../../interfaces';
import actionTypes from './actionTypes';

export function actionLoadWidgets(widgets: IWidget[]) {
    return { type: actionTypes.LOAD_WIDGETS, widgets };
}

export function getWidgets() {
    return function (dispatch: ThunkActionDispatch<any>) {
        return apiGetWidgets().then((widgets: IWidget[]) =>
            dispatch(actionLoadWidgets(widgets))
        );
    };
}
