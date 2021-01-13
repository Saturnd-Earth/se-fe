import React from 'react';
import loadingImg from '../images/loading.png';

export default function Loading() {
  return (
    <div className='post-overlay' data-testid='loading component' style={{"display": "flex"}}>
      <img
        className='spin'
        alt='Updating the Post'
        src={loadingImg}
        style={{
              "height": "10em",
              "width": "auto",
              "margin": "auto",
              "padding": "4em"
        }}>
      </img>
    </div>
  )
}
