import React, { Component } from 'react'
import './Make_Post.scss';

import videoIcon from '../images/add-vid-blue.png'
import imageIcon from '../images/add-img-blue.png'

export class Make_Post extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render() {
    return (
      <section className='make-post-section'>
        <button className='make-post-button'>
          Post
        </button>
        <h4>Start Your Ring By Making A Post Here</h4>
        <textarea 
          rows="10" cols="50"
          className='make-post-input'
          placeholder='Type your post here!'
        />
        <img src={imageIcon} className='icons make-post-image'/>
        <img src={videoIcon} className='icons make-post-video'/>
      </section>
    )
  }
}

export default Make_Post
