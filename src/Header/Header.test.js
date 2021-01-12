import { createMemoryHistory } from 'history'
import Header from './Header.js'
import { Router } from "react-router-dom"
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import awards from '../images/award-white.png'
import feed from '../images/user-white.png'
import home from '../images/house-white.png'
import login from '../images/login-white.png';
import logout from '../images/logout-white.png';
import post from '../images/post-white.png'
import seLogo from '../images/se-logo.png'
import signup from '../images/sign-up-blue.png';


describe('Header', () => {
  let history;
  beforeEach(() => {
    history = createMemoryHistory()
    render(
      <Router history={history}>
        <Header />
      </Router>
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

    setTimeout(() => {
      expect(screen.getByAltText('Home')).toBeInTheDocument().toHaveAttribute('src', home)

      let postNav = screen.getByAltText('Add a post')
      expect(postNav).toBeInTheDocument()
      expect(postNav).toHaveAttribute('src', post)

      let feedNav = screen.getByAltText('Your feed')
      expect(feedNav).toBeInTheDocument()
      expect(feedNav).toHaveAttribute('src', feed)

      let awardsNav = screen.getByAltText('Your awards')
      expect(awardsNav).toBeInTheDocument()
      expect(awardsNav).toHaveAttribute('src', awards)

      let loginNav = screen.getByAltText('Log in')
      expect(loginNav).toBeInTheDocument()
      expect(loginNav).toHaveAttribute('src', login)

      let signUpNav = screen.getByAltText('Sign up')
      expect(signUpNav).toBeInTheDocument()
      expect(signUpNav).toHaveAttribute('src', signup)
    }, 2000)
  })

  it('should navigate when a navButton is clicked', async () => {

    setTimeout(() => {
      let postNav = screen.getByAltText('Add a post')
    userEvent.click(postNav)
    // await waitFor( () => 
    expect(history.entries[1].pathname).toEqual('/make_post') 
    // )

    let feedNav = screen.getByAltText('Your feed')
    userEvent.click(feedNav)
    // await waitFor( () => 
    expect(history.entries[2].pathname).toEqual('/my_post') 
    // )

    let awardsNav = screen.getByAltText('Your awards')
    userEvent.click(awardsNav)
    // await waitFor( () => 
    expect(history.entries[3].pathname).toEqual('/awards') 
    // )

    let signUpNav = screen.getByAltText('Sign up')
    userEvent.click(signUpNav)
    // await waitFor( () => 
    expect(history.entries[4].pathname).toEqual('/signup') 
    // )

    let loginNav = screen.getByAltText('Log in')
    userEvent.click(loginNav)
    // await waitFor( () => 
    expect(history.entries[5].pathname).toEqual('/login') 
    // )

    let homeNav = screen.getByAltText('Home')
    userEvent.click(homeNav)
    // await waitFor( () => 
    expect(history.entries[6].pathname).toEqual('/') 
    // )
    }, 2000)
  })
});
