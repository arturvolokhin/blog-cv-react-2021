import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":lang" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
