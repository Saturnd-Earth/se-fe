import { createMemoryHistory } from 'history'
import Login from './Login.js'
import { Router } from "react-router-dom"
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Login', () => {

  let button, history, passwordInput, userNameInput;
  beforeEach(() => {

    history = createMemoryHistory()
    render(
      <Router history={history}>
        <Login />
      </Router>
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
    userEvent.type(userNameInput, 'admin')
    userEvent.type(passwordInput, 'password')
    userEvent.click(button)

    expect(history.entries[1].pathname).toEqual('/');
  })
});
