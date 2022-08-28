import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import bn from 'javascript-time-ago/locale/bn.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(bn)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
