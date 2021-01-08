import React, { useState, useEffect } from 'react'
import '../../Scss/base.scss';

const Image = (props) => {
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
}

export default Image
