import React, { useState } from 'react'
import '../../Scss/base.scss';

const Video = (props) => {
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');

  return (
    <section className='input-section' data-testid='make post input'>
      <textarea
        rows="6" cols="10"
        className='make-post-field  tab-content'
        placeholder='Add A Title To Your Video'
        spellCheck= "true"
        wrap="soft"
        onChange={(e) => {
          setText(e.target.value)
          props.setInput({ postType: 'Video', text: e.target.value, url})
        }}
      />
      <input
        className='make-post-field  media-content'
        placeholder='input your video link!'
        minLength='5'
        type='url'
        onChange={(e) =>{
          setUrl(e.target.value)
          props.setInput({ postType: 'Video', text, url: e.target.value})
        }}
      />
    </section>
  )
}

export default Video
