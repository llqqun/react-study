import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//React.StrictMode 是 React 提供的一个开发工具，主要用于帮助开发者发现应用中潜在的问题
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// reportWebVitals(console.log);
