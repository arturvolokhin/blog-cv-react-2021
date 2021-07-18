import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { presetData } from './Components/api/localStorageApi';
import { ThemeProvider } from './context/ThemeProvider';

presetData();

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);