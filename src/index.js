import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { clanName } from './config';

const routerBaseName = process.env.PUBLIC_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={routerBaseName}>
      <Helmet>
        <title>{clanName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

