import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Reset from './styles/GlobalStyle.js';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);