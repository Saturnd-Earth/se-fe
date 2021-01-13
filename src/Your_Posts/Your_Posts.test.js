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
        <Router history={history}>
          <YourPosts 
            myPostsPage={true}
            icon={ringIcon}
            userData={userData}
          />
        </Router>
      )
    })
})