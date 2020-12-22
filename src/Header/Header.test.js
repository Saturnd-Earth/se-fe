import Header from './Header.js'
import { MemoryRouter } from "react-router-dom"
import React from 'react'
import { render, screen } from '@testing-library/react'
import seLogo from '../images/se-logo.png'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'


describe('Survey List', () => {

  beforeEach(() => {
    render(
      <Header />
    )
  })

  it('should display a logo', () => {

    let logo = screen.getByAltText('Saturn`d Earth Logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', seLogo)
  })
});
