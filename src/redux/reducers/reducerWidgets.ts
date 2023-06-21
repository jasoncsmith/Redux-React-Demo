import { IWidget } from '../../interfaces';
import actionTypes from '../actions/actionTypes';

interface IAction {
    type: string;
    widgets: object[];
}

export function reducerWidgets(state: IWidget[] = [], action: IAction) {
    switch (action.type) {
        case actionTypes.LOAD_WIDGETS:
            return action.widgets;
        default:
            return state;
    }
}
