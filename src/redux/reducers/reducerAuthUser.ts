import { IUser } from '../../interfaces';
import actionTypes from '../actions/actionTypes';

interface IAction {
    type: string;
    prefs: number[];
    id: number;
    user: IUser;
    bgs: { id: number; color: string };
}

const initialUser = {
    id: 0,
    name: '',
    email: '',
    preferences: { favoriteWidgets: [], hiddenWidgets: [] },
};

export function reducerAuthUser(state: IUser = initialUser, action: IAction) {
    switch (action.type) {
        case actionTypes.LOAD_USER:
            return action.user;

        // case actionTypes.UPDATE_USER:
        //     return { ...action.user };

        case actionTypes.UPDATE_USER_PREFS_HIDDEN_WIDGETS_ADD:
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    hiddenWidgets: [
                        ...state.preferences.hiddenWidgets,
                        action.id,
                    ],
                },
            };

        case actionTypes.UPDATE_USER_PREFS_HIDDEN_WIDGETS_REMOVE:
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    hiddenWidgets: state.preferences.hiddenWidgets.filter(
                        (id) => id !== action.id
                    ),
                },
            };

        case actionTypes.UPDATE_USER_PREFS_FAVORITE_WIDGETS:
            state.preferences.favoriteWidgets = [...action.prefs];
            return { ...state };

        // case 'UPDATE_WIDGET_BACKGROUND':
        //     return {
        //         ...state,
        //         prefsWidgetBackground: action.bgs,
        //     };

        default:
            return state;
    }
}
