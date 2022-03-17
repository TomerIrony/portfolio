import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/protfolio">
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
