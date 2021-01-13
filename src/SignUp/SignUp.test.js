import { createMemoryHistory } from 'history'
import { MockedProvider } from '@apollo/client/testing';
import { Router } from "react-router-dom"
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { SignUp } from './SignUp.js'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { CREATE_USER } from '../requests.js'

describe('SignUp', () => {

  describe('Basic Rendering', () => {

    it('should display a login form', () => {
      render(
        <MockedProvider mocks={[]} addTypename={false}>
            <SignUp />
        </MockedProvider>
      )

      let userNameInput = screen.getByPlaceholderText('username')
      let passwordInput = screen.getByPlaceholderText('password')
      let button = screen.getByText('Sign up')

      expect(userNameInput).toBeInTheDocument()
      expect(passwordInput).toBeInTheDocument()
      expect(button).toBeInTheDocument()
    })
  });

  describe('GraphQL Tests', () => {

    it('should submit user credentials when `login` button is clicked', async () => {

      let history = createMemoryHistory()
      const mocks = [
        {
          request: {
            query: CREATE_USER
          },
          result: {
          },
        },
      ];

      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router history={history}>
            <SignUp />
          </Router>
        </MockedProvider>
      )

      let userNameInput = screen.getByPlaceholderText('username')
      let passwordInput = screen.getByPlaceholderText('password')
      let button = screen.getByText('Sign up')

      userEvent.type(userNameInput, 'Debug User')
      userEvent.type(passwordInput, '123qwe')
      userEvent.click(button)

      await setTimeout( () => {
        expect(history.entries[1].pathname).toEqual('/')
      }, 100);
    })

    it('should display an error message when the username already exists', async () => {

      let history = createMemoryHistory()
      const mocks = [
        {
          request: {
            query: CREATE_USER,
          },
          error: {
          },
        },
      ];

      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router history={history}>
            <SignUp />
          </Router>
        </MockedProvider>
      )

      let userNameInput = screen.getByPlaceholderText('username')
      let passwordInput = screen.getByPlaceholderText('password')
      let button = screen.getByText('Sign up')

      userEvent.type(userNameInput, 'Debug User')
      userEvent.type(passwordInput, '123qwe')
      userEvent.click(button)

      await setTimeout( () => {
        expect(screen.getByText('Looks like that user already exists! Select a different user name')).toBeInTheDocument()
      }, 100);
    })
  })
});
