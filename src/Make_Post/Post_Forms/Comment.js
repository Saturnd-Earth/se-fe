import React, { useState, useEffect } from 'react'
import '../../Scss/base.scss';

const Comment = (props) => {

  return (
    <section className='input-section' data-testid='make post input'>
      <textarea
        rows="10" cols="10"
        className='make-post-input tab-content'
        placeholder='Type your post here!'
        spellCheck= "true"
        wrap="soft"
        onChange={(e) => props.setInput({type: 'Comment', text: e.target.value})}
      />
    </section>
  )
}
export default Comment
