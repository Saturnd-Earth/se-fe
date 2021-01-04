import React, { Component, useState, useEffect } from 'react'
import '../Scss/base.scss';

const Make_Post_Input = (props) => {

  if (props.commentInput === 3) {
    return (
      <section className='input-section'>
        <textarea 
          rows="2" cols="10"
          className='make-post-input tab-content'
          placeholder='Title'
          spellCheck= "true"
          wrap="soft"
        />
        <textarea 
          rows="7" cols="10"
          className='make-post-input tab-content'
          placeholder='input your video link!'
          spellCheck= "true"
          wrap="soft"
        />
      </section>
    ) 
  } else if (props.commentInput === 2) {
    return ( 
      <section className='input-section'>
        <textarea 
          rows="2" cols="10"
          className='make-post-input tab-content'
          placeholder='Title'
          spellCheck= "true"
          wrap="soft"
        />
        <textarea 
          rows="7" cols="10"
          className='make-post-input tab-content'
          placeholder='input your image link!'
          spellCheck= "true"
          wrap="soft"
        />
      </section>
    )
  } else {
    return (
      <section className='input-section'>
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
