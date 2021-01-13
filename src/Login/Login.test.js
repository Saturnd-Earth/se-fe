import { createMemoryHistory } from 'history'
import Login from './Login.js'
import { LOG_IN } from '../requests.js'
import { MockedProvider } from '@apollo/client/testing';
import { Router } from "react-router-dom"
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Login', () => {


  let button, history, passwordInput, userNameInput;
  beforeEach(() => {

    const mocks = [
      {
        request: {
          query: LOG_IN,
          variables: {username: 'User', password: 'pw'}
        },
        result: {
          "data":{
            "user":[
              {
                "id":"14",
              },
            ]
          }
        }
      }
    ];

    history = createMemoryHistory()

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router history={history}>
          <Login />
        </Router>
      </MockedProvider>
    )

    userNameInput = screen.getByPlaceholderText('username')
    passwordInput = screen.getByPlaceholderText('password')
    button = screen.getByText('Login')
  })

  it('should display a login form', () => {
    expect(userNameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should submit user credentials when `login` button is clicked', () => {
    userEvent.type(userNameInput, 'User')
    userEvent.type(passwordInput, 'pw')
    userEvent.click(button)

    setTimeout(() => {
      expect(history.entries[1].pathname).toEqual('/');
    }, 5000)

  })
});
