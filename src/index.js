import App from './App';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const client = new ApolloClient({
  uri: ' https://be-saturnd-earth.herokuapp.com/graphiql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
