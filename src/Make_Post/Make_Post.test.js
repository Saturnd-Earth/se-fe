import { createMemoryHistory } from 'history'
import { MockedProvider } from '@apollo/client/testing';
import Make_Post from './Make_Post.js'
import Comment from './Post_Forms/Comment.js'
import Image from './Post_Forms/Image.js'
import Video from './Post_Forms/Video.js'
import { Router } from "react-router-dom"
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { USER_SIGNUP } from '../requests.js'

describe('Make_Post', () => {

  describe('Comment', () => {

    it('should display a comment form by default', () => {
      render(
        <MockedProvider mocks={[]} addTypename={false}>
            <Comment />
        </MockedProvider>
      )

      let textBox = screen.getByPlaceholderText('Type your post here!')
      expect(textBox).toBeInTheDocument()
    })
  })

  describe('Image', () => {

    it('should be able to display an Image form', () => {
      render(
        <MockedProvider mocks={[]} addTypename={false}>
            <Image />
        </MockedProvider>
      )

      let textBox = screen.getByPlaceholderText('Add A Title To Your Image')
      expect(textBox).toBeInTheDocument()

      let urlBox = screen.getByPlaceholderText('input your image link!')
      expect(urlBox).toBeInTheDocument()
    })
  });

  describe('Video', () => {

    it('should be able to display an Video form', () => {
      render(
        <MockedProvider mocks={[]} addTypename={false}>
            <Video />
        </MockedProvider>
      )

      let textBox = screen.getByPlaceholderText('Add A Title To Your Video')
      expect(textBox).toBeInTheDocument()

      let urlBox = screen.getByPlaceholderText('input your video link!')
      expect(urlBox).toBeInTheDocument()
    })
  });

  describe('Make_Post', () => {

    it('should display render correctly', () => {
      render(
        <MockedProvider mocks={[]} addTypename={false}>
            <Make_Post userData={{id: 1, username: 'User'}}/>
        </MockedProvider>
      )

      let title = screen.getByText('Start Your Ring By Making A Post Here')
      expect(title).toBeInTheDocument()

      let commentButton = screen.getByText('Add Comment')
      expect(commentButton).toBeInTheDocument()

      let imageButton = screen.getByText('Link Image')
      expect(imageButton).toBeInTheDocument()

      let videoButton = screen.getByText('Link Video')
      expect(videoButton).toBeInTheDocument()

      let postForm = screen.getByTestId('make post input')
      expect(postForm).toBeInTheDocument()

      let postButton = screen.getByText('Post')
      expect(postButton).toBeInTheDocument()
    })

    it('should switch forms when clicking buttons', async ()=> {
      render(
        <MockedProvider mocks={[]} addTypename={false}>
            <Make_Post userData={{id: 1, username: 'User'}}/>
        </MockedProvider>
      )

      let imageButton = screen.getByText('Link Image')
      userEvent.click(imageButton)
      await waitFor( () => expect(screen.getByPlaceholderText('Add A Title To Your Image')).toBeInTheDocument())

      let videoButton = screen.getByText('Link Video')
      userEvent.click(videoButton)
      await waitFor( () => expect(screen.getByPlaceholderText('Add A Title To Your Video')).toBeInTheDocument())

      let commentButton = screen.getByText('Add Comment')
      userEvent.click(commentButton)
      await waitFor( () => expect(screen.getByPlaceholderText('Type your post here!')).toBeInTheDocument())
    })
  })
});
