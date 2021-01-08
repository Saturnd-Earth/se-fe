import React, { useState, useEffect } from 'react'
import '../../Scss/base.scss';

const Video = (props) => {
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
}

export default Video
