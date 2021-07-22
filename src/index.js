import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { presetData } from './Components/api/localStorageApi';
import { ThemeProvider } from './context/ThemeProvider';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";

presetData();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);