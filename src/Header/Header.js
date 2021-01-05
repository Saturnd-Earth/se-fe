import React from 'react';
import '../Scss/base.scss';
import '../Scss/Header.scss';

import awards from '../images/award-white.png'
import feed from '../images/user-white.png'
import home from '../images/house-white.png'
import post from '../images/post-white.png'
import seLogo from '../images/se-logo.png';
// import seLogo from '../images/se-logo.png'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <section>
            <section className='header-top'>
                <img src={seLogo} alt='Saturn`d Earth Logo' id='se-logo'/>
                <h1 className='header-text'>Saturn'd Earth</h1>
            </section>
            <section className='header-bottom'>
              <NavLink to='/' label="home" exact activeClassName="selected">
                <img src={home} alt='Home' className='bottom-images' id='home-icon'/>
              </NavLink>
              <NavLink to="/make_post" label="my post" activeClassName="selected">
                <img src={post} alt='Add a post' className='bottom-images' id='make-post-icon'/>
              </NavLink>
              <NavLink to="/my_post" label="my post" activeClassName="selected">
                  <img src={feed} alt='Your feed' className='bottom-images' id='user-feed-icon'/>
              </NavLink>
              <NavLink to="/awards" label="my awards" activeClassName="selected">
                  <img src={awards} alt='Your awards' className='bottom-images' id='user-awards-icon'/>
              </NavLink>
            </section>
        </section>
    )
}
