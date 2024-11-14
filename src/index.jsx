import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.scss'
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import { LocationProvider } from './Context/LocationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <LocationProvider>
    <RouterProvider router={router} />
  </LocationProvider>
  </React.StrictMode>
);


