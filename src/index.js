import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// ### This following commented out code will be used when we have an endpoint from the Backend

// const client = new ApolloClient({
//   uri: 'localhost:3000/',
//   cache: new InMemoryCache()
// });

ReactDOM.render(
  <React.StrictMode>
    // <ApolloProvider client={client}>
      <App />
    // </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
