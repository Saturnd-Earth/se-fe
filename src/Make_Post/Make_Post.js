import React, { Component } from 'react'
import './Make_Post.scss';

import home from '../images/house-white.png'

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
        <textarea className='make-post-input'>

        </textarea>

      </section>
    )
  }
}

export default Make_Post
