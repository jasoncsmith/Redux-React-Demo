import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import App from './App';
import configureStore from './redux/configureStore';

const root = createRoot(document.getElementById('root'));

export const initialState = {
    cars: [],
    trucks: [],
};

const store = configureStore(initialState);

root.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
);
