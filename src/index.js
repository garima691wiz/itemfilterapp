import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
