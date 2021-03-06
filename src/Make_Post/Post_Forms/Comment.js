import React from 'react'
import '../../Scss/base.scss';

const Comment = (props) => {

  return (
    <section className='input-section' data-testid='make post input'>
      <textarea
        rows="10" cols="10"
        className='make-post-field tab-content'
        placeholder='Type your post here!'
        spellCheck= "true"
        wrap="soft"
        onChange={(e) => props.setInput({postType: 'Comment', text: e.target.value})}
      />
    </section>
  )
}
export default Comment
