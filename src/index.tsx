import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThunkActionDispatch } from 'redux-thunk';

import configureStore from './redux/configureStore';
import { getWidgets } from './redux/actions/actionWidgets';
import { getAuthUser } from './redux/actions/actionUser';
import * as storage from './helpers/localStorage';
import { IState } from './interfaces';
import App from './App';
import './styles/index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

export const initialState: IState = {
    user: {
        id: 0,
        name: '',
        email: '',
        preferences: { favoriteWidgets: [], hiddenWidgets: [] },
    },
    widgets: [],
};

const storedState: IState = storage.get('state');
let store: ReturnType<typeof configureStore>;

if (storedState) {
    console.log('loaded from localStorage');
    store = configureStore(storedState);
} else {
    console.log('loaded from mockApi');
    store = configureStore(initialState);

    getAuthUser()(store.dispatch as ThunkActionDispatch<any>).catch((err) =>
        alert('There was an error loading the app')
    );
    getWidgets()(store.dispatch as ThunkActionDispatch<any>).catch((err) =>
        alert('There was an error loading the app')
    );
}

store.subscribe(function () {
    storage.set('state', store.getState());
});

root.render(
    <ReduxProvider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </ReduxProvider>
);
