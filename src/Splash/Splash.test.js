import { addRing, hideMap, removeAllLikes, removeAllRings, setZoomToMaxDisplay, shrinkToHalf, showMap, spreadToFull  } from '../mapActions.js'
import { createMemoryHistory } from 'history'
import Splash from './Splash.js'
import { GET_ALL_POSTS } from '../requests.js'
import { MockedProvider } from '@apollo/client/testing';
import React from 'react'
import { Router } from "react-router-dom"
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

jest.mock('../mapActions.js')

describe('Splash', () => {

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
          <Splash position={{lat: 1, lng: 2}}/>
      </MockedProvider>
    )
  })

  it('should display a loading message by default', () => {

    let loading = screen.getByTestId('loading component')
    expect(loading).toBeInTheDocument()
  })
});
