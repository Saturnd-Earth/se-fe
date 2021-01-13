import { MockedProvider } from '@apollo/client/testing';
import { createMemoryHistory } from 'history';
import YourPosts from './Your_Posts.js';
import { Router } from "react-router-dom";
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import ringIcon from '../images/ring-icon.png';

describe('Your Posts', () => {
    let history;
    beforeEach(() => {
      history = createMemoryHistory()
      render(
        <MockedProvider >
        <Router history={history}>
          <YourPosts 
            myPostsPage={true}
            icon={ringIcon}
            userData={{id: 1, username: 'Chris'}}
          />
        </Router>
        </MockedProvider>
      )
    })

    it('should give a status update initially', () => {
        expect(screen.getByText('LOADING POSTS...')).toBeInTheDocument()
    })
    
    it('should not display posts without a user being signed in', () => {
        setTimeout(() => {
            expect(screen.getByText('Please sign in to access this feature!')).toBeInTheDocument()
        }, 10000)
    })
})