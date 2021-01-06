import { createMemoryHistory } from 'history'
import { MockedProvider } from '@apollo/client/testing';
import { Post } from './Post.js'
import { Router } from "react-router-dom"
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { USER_SIGNUP } from '../requests.js'

import dummyIcon from '../images/dummyIcon.png';
import defaultLike from '../images/like-white.png';
import blueLike from '../images/like-blue.png';

describe('Post', () => {

  describe('Basic Rendering', () => {

    it('should display a userIcon and like button', () => {
      render(
        <MockedProvider mocks={[]} addTypename={false}>
            <Post />
        </MockedProvider>
      )

      let userIcon = screen.getByAltText('User Icon')
      expect(userIcon).toBeInTheDocument()
      expect(userIcon).toHaveAttribute('src', dummyIcon)

      let like = screen.getByAltText('Like button')
      expect(like).toBeInTheDocument()
      expect(like).toHaveAttribute('src', defaultLike)

    })
  });

  // it('should turn blue when clicked', () => {
  //
  //   render(
  //     <MockedProvider mocks={[]} addTypename={false}>
  //         <Post />
  //     </MockedProvider>
  //   )
  //
  //   let like = screen.getByAltText('Like button')
  //   userEvent.click(like)
  //   expect(like).toHaveAttribute('src', blueLike)
  // })
});
