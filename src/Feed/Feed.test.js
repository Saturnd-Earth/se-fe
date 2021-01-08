import { act } from 'react-dom/test-utils';
import { createMemoryHistory } from 'history'
import { MockedProvider } from '@apollo/client/testing';
import Feed from './Feed.js'
import { Router } from "react-router-dom"
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { GET_ALL_POSTS } from '../requests.js'

describe('Feed', () => {

  beforeEach( () => {
    const mocks = [
      {
        request: {
          query: GET_ALL_POSTS,
          variables: {}
        },
        result: {
          "data":{
            "posts":[
              {
                "id":"14",
                "content":"Content1",
                "latitude":0,
                "longitude":0,
                "ringMinMax":"[0, 1]",
                "createdAt":"2021-01-05",
                "userId":10,
                "__typename":"Post"
              },
              {
                "id":"15",
                "content":"Content2",
                "latitude":1,
                "longitude":1,
                "ringMinMax":"[0, 1]",
                "createdAt":"2021-01-05",
                "userId":11,
                "__typename":"Post"
              }
            ]
          }
        }
      }
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
          <Feed />
      </MockedProvider>
    )
  })

  it('should display a loading message by default', () => {

    let loadingText = screen.getByText('LOADING POSTS...')
    expect(loadingText).toBeInTheDocument()
  })

  it('should be able to fetch a post', async () => {

    let content = await waitFor( () => screen.getByText('Content1') )
    let createdAt = screen.getByText('Date: 2021-01-05')
    let ring = screen.getByText('Ring: 1')
    let nextBtn = screen.getByText('Next')
    let prevBtn = screen.getByText('Previous')

    expect(content).toBeInTheDocument()
    expect(createdAt).toBeInTheDocument()
    expect(ring).toBeInTheDocument()
    expect(nextBtn).toBeInTheDocument()
    expect(prevBtn).toBeInTheDocument()

  })

  it('should be able to click between posts', async() => {

    let content1 = await waitFor( () =>screen.getByText('Content1') )
    let nextBtn = screen.getByText('Next')
    let prevBtn = screen.getByText('Previous')
    expect(content1).toBeInTheDocument()

    act( () => userEvent.click(nextBtn) )

    let content2 = screen.getByText('Content2')
    expect(content2).toBeInTheDocument()

    act( () => userEvent.click(nextBtn) )

    expect(content1).toBeInTheDocument()

    act( () => userEvent.click(prevBtn) )

    expect(content2).toBeInTheDocument()
  })
});
