import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import AppRouter from './router/index';
import reportWebVitals from './reportWebVitals';

const app = document.getElementById('root')

<<<<<<< HEAD
// ReactDOM.render(
//   <React.StrictMode>
//     <AppRouter />
//   </React.StrictMode>,
//   app
// );
ReactDOM.render(<AppRouter />, app);
=======
ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
  ,app
);
>>>>>>> origin/react

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
