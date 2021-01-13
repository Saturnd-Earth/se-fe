import { createMemoryHistory } from 'history'
import { MockedProvider } from '@apollo/client/testing';
import { Post } from './Post.js'
import { Router } from "react-router-dom"
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { USER_SIGNUP } from '../requests.js'

import defaultLike from '../images/like-white.png';
import blueLike from '../images/like-blue.png';

describe('Post', () => {

  describe('Basic Rendering', () => {

    it('should display a userIcon and like button', () => {
      render(
        <MockedProvider mocks={[]} addTypename={false}>
          <Post
            center={{lat:0,lng:0}}
            content={'Hi'}
            createdAt={'2020-01-01'}
            id={1}
            likes={[]}
            ring={[1, 1]}
            latitude={1}
            longitude={1}
            position={{lat:1, lng:1}}
            postType={'Comment'}
            url={'test.com'}
            userData={{id:1, username: 'User'}}
            userId={1}
          />
        </MockedProvider>
      )

      let like = screen.getByAltText('Like button')
      expect(like).toBeInTheDocument()
      expect(like).toHaveAttribute('src', defaultLike)

    })
  })

  describe('Functionality', () => {

    it('the like button should turn blue when a user has liked the post', () => {

      render(
        <MockedProvider mocks={[]} addTypename={false}>
        <Post
          center={{lat:0,lng:0}}
          content={'Hi'}
          createdAt={'2020-01-01'}
          id={1}
          likes={[{userId: 1}]}
          ring={[1, 1]}
          latitude={1}
          longitude={1}
          position={{lat:1, lng:1}}
          postType={'Comment'}
          url={'test.com'}
          userData={{id:1, username: 'User'}}
          userId={1}
        />
        </MockedProvider>
      )

      let like = screen.getByAltText('Like button')
      expect(like).toHaveAttribute('src', blueLike)
    })
  })
})
