import { hideMap, showMap } from '../mapActions.js'
import React from 'react';
import '../Scss/base.scss';
import { NavLink } from 'react-router-dom'

import earth from '../images/earth-white.png'
import feed from '../images/user-white.png'
import home from '../images/house-white.png'
import post from '../images/post-white.png'


export default function Header_Bottom_Button() {
  return(
    <section className='header-bottom'>
      <NavLink to='/se-fe' label="home" exact activeClassName="selected" onClick={ showMap }>
        <img
          src={home}
          alt='Home'
          className='bottom-images'
          id='home-icon'
        />
      </NavLink>
      <NavLink to='/se-fe/make_post' label="my post" activeClassName="selected" onClick={ hideMap }>
        <img
          src={post}
          alt='Add a post'
          className='bottom-images'
          id='make-post-icon'
          onClick={ showMap }
        />
      </NavLink>
      <NavLink to='/se-fe/my_post' label="my post" activeClassName="selected" onClick={ showMap }>
          <img
            src={feed}
            alt='Your feed'
            className='bottom-images'
            id='user-feed-icon'
            onClick={ showMap }
          />
      </NavLink>
      <NavLink to='/se-fe/earth' label="show all rings" activeClassName="selected" onClick={ hideMap }>
          <img
            src={earth}
            alt='Your awards'
            className='bottom-images'
            id='user-awards-icon'
            onClick={ showMap }
          />
      </NavLink>
    </section>
  )
}
