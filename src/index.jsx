import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { presetData } from './utils/localStorage';
import { ThemeProvider } from './context/ThemeProvider';

presetData();

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
