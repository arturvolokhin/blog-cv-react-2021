import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { presetData } from './Components/api/localStorageApi';

presetData();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);