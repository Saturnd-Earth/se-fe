import Post from './Post.js'
import { MemoryRouter } from "react-router-dom"
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'


import dummyIcon from '../images/dummyIcon.png';
import defaultLike from '../images/like-white.png';
import blueLike from '../images/like-blue.png';


describe('Post', () => {

  beforeEach(() => {
    render(
      <Post />
    )
  })

  it('should display user icon', () => {

    let userIcon = screen.getByAltText('User Icon')
    expect(userIcon).toBeInTheDocument()
    expect(userIcon).toHaveAttribute('src', dummyIcon)
  })

  it('should have a like `button`', () => {

    let like = screen.getByAltText('Like button')
    expect(like).toBeInTheDocument()
    expect(like).toHaveAttribute('src', defaultLike)
  })

  it('should turn blue when clicked', () => {

    let like = screen.getByAltText('Like button')
    userEvent.click(like)
    expect(like).toHaveAttribute('src', blueLike)
  })
});
