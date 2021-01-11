import React, { useState, useEffect } from 'react'
import '../../Scss/base.scss';

const Image = (props) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  return (
    <section className='input-section' data-testid='make post input'>
      <textarea
        rows="6" cols="10"
        className='make-post-input tab-content'
        placeholder='Add A Title To Your Image'
        spellCheck= "true"
        wrap="soft"
        onChange={(e) => {
          setTitle(e.target.value)
          props.setInput({ postType: 'Image', title: e.target.value, url})
        }}
      />
      <input
        className='make-post-input media-content'
        placeholder='input your image link!'
        minLength='5'
        type='url'
        onChange={(e) =>{
          setUrl(e.target.value)
          props.setInput({ postType: 'Image', title, url: e.target.value})
        }}
      />
    </section>
  )
}

export default Image
