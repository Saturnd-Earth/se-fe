import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createMemoryHistory } from 'history'
import SignUp from './SignUp.js'
import { Router } from "react-router-dom"
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('SignUp', () => {

  let button, history, passwordInput, userNameInput;
  beforeEach(() => {

    const client = new ApolloClient({
      uri: 'http://localhost:3000/',
      cache: new InMemoryCache()
    });
    history = createMemoryHistory()

    render(
      <ApolloProvider client={client}>
        <Router history={history}>
          <SignUp />
        </Router>
      </ApolloProvider>
    )

    userNameInput = screen.getByPlaceholderText('username')
    passwordInput = screen.getByPlaceholderText('password')
    button = screen.getByText('Sign up')
  })

  it('should display a login form', () => {
    expect(userNameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should submit user credentials when `login` button is clicked', () => {
    userEvent.type(userNameInput, 'admin')
    userEvent.type(passwordInput, 'password')
    userEvent.click(button)

    expect(history.entries[1].pathname).toEqual('/');
  })
});
