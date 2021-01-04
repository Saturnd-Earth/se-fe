import App from './App';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom'
import client from './requests.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
