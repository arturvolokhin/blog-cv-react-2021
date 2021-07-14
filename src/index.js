import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getDefinedData } from './Components/api/localStorageApi';

getDefinedData();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);