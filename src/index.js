import React from 'react';
import ReactDOM from 'react-dom/client';
// Import library CSS variables FIRST - these define all semantic variables the library needs
import 'squarex-ui-component-lib/tokens/css/light';
// Then import our custom styles
import './index.css';
// Finally import library component styles (which use the variables defined above)
import 'squarex-ui-component-lib/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
