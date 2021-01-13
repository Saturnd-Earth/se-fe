import { act } from 'react-dom/test-utils';
import { createMemoryHistory } from 'history'
import Feed from './Feed.js'
import { GET_FEED } from '../requests.js'
import { MockedProvider } from '@apollo/client/testing';
import React from 'react'
import { Router } from "react-router-dom"
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Feed', () => {

  beforeEach( () => {
    const mocks = [
      {
        request: {
          query: GET_FEED,
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
          <Feed position={{lat: 1, lng: 2}}/>
      </MockedProvider>
    )
  })

  it('should display a loading message by default', () => {

    let loading = screen.getByTestId('loading component')
    expect(loading).toBeInTheDocument()
  })

  it('should be able to fetch a post', async () => {

    setTimeout( () => {
      expect(screen.getByText('Content1')).toBeInTheDocument()
      expect(screen.getByText('Date: 2021-01-05')).toBeInTheDocument()
      expect(screen.getByText('Ring: 1')).toBeInTheDocument()
      expect(screen.getByText('Next')).toBeInTheDocument()
      expect(screen.getByText('Previous')).toBeInTheDocument()
    }, 5000)

  })

  it('should be able to click between posts', async() => {
    setTimeout(() => {
      let content1 = screen.getByText('Content1');
      let content2 = screen.getByText('Content2');
      let nextBtn = screen.getByText('Next');
      let prevBtn = screen.getByText('Previous');

      act( () => userEvent.click(nextBtn) )
      expect(content2).toBeInTheDocument()
      act( () => userEvent.click(nextBtn) )
      expect(content1).toBeInTheDocument()
      act( () => userEvent.click(prevBtn) )
      expect(content2).toBeInTheDocument()
    }, 5000)
  })
});
