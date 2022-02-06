import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './router';
import { presetData } from './utils/localStorage';
import { ThemeProvider } from './context/ThemeProvider';
import './i18n';

presetData();

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </Suspense>,
  document.getElementById('root'),
);
