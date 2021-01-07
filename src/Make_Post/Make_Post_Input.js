import React, { useState, useEffect } from 'react'
import '../Scss/base.scss';

const Make_Post_Input = (props) => {

  if (props.commentInput === 3) {
    return (
      <section className='input-section' data-testid='make post input'>
        <textarea
          rows="6" cols="10"
          className='make-post-input tab-content'
          placeholder='Add A Title To Your Video'
          spellCheck= "true"
          wrap="soft"
        />
        <input
          className='make-post-input media-content'
          placeholder='input your video link!'
          minLength='5'
          type='url'
        />
      </section>
    )
  } else if (props.commentInput === 2) {
    return (
      <section className='input-section' data-testid='make post input'>
        <textarea
          rows="6" cols="10"
          className='make-post-input tab-content'
          placeholder='Add A Title To Your Image'
          spellCheck= "true"
          wrap="soft"
        />
        <input
          className='make-post-input media-content'
          placeholder='input your image link!'
          minLength='5'
          type='url'
        />
      </section>
    )
  } else {
    return (
      <section className='input-section' data-testid='make post input'>
        <textarea
          rows="10" cols="10"
          className='make-post-input tab-content'
          placeholder='Type your post here!'
          spellCheck= "true"
          wrap="soft"
        />
      </section>
    )
  }
}

export default Make_Post_Input
