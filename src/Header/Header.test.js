import Header from './Header.js'
import { MemoryRouter } from "react-router-dom"
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import awards from '../images/award-white.png'
import feed from '../images/user-white.png'
import home from '../images/house-white.png'
import post from '../images/post-white.png'
import seLogo from '../images/se-logo.png'


describe('Header', () => {

  beforeEach(() => {
    let icons = {home, post, feed, awards}
    render(
      <MemoryRouter>
        <Header icons={icons}/>
      </MemoryRouter>
    )
  })

  it('should display a logo', () => {

    let logo = screen.getByAltText('Saturn`d Earth Logo')
    let title = screen.getByText(`Saturn'd Earth`)
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', seLogo)
    expect(title).toBeInTheDocument()
  })

  it('should have navigation buttons', () => {

    let homeNav = screen.getByAltText('Home')
    expect(homeNav).toBeInTheDocument()
    expect(homeNav).toHaveAttribute('src', home)

    let postNav = screen.getByAltText('Add a post')
    expect(postNav).toBeInTheDocument()
    expect(postNav).toHaveAttribute('src', post)

    let feedNav = screen.getByAltText('Your feed')
    expect(feedNav).toBeInTheDocument()
    expect(feedNav).toHaveAttribute('src', feed)

    let awardsNav = screen.getByAltText('Your awards')
    expect(awardsNav).toBeInTheDocument()
    expect(awardsNav).toHaveAttribute('src', awards)

  })
});
