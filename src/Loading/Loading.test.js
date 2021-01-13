import Loading from './Loading.js'
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import loading from '../images/loading.png'

describe('Loading', () => {
  beforeEach(() => {
    render(
      <Loading />
    )
  })

  it('should display a spinning animation', () => {

    let spinning = screen.getByAltText('Updating the Post')
    expect(spinning).toBeInTheDocument()
    expect(spinning).toHaveAttribute('src', loading)
    expect(spinning).toHaveAttribute('class', 'spin')
  })
});
