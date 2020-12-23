import React from 'react';
import './Header.scss'

import home from '../Images/house-white.png'
import post from '../Images/post-white.png'
import feed from '../Images/user-white.png'
import awards from '../Images/award-white.png'
import seLogo from '../Images/se-logo.png'
import { Link, Redirect } from 'react-router-dom';

export default function Header() {
    return (
        <section>
            <section className='header-top'>
                <img src={seLogo} alt='Saturn`d Earth Logo' id='se-logo'/>
                <h1 className='header-text'>Saturn'd Earth</h1>
            </section>
            <section className='header-bottom'>
              <Link to="/" label="home" className='icon-links'>
                <img src={home} alt='Home' className='bottom-images' id='home-icon'/>
              </Link>
              <Link to="/make_post" label="my post" className='icon-links'>
                <img src={post} alt='Add a post' className='bottom-images' id='make-post-icon'/>
              </Link>
              <Link to="/my_post" label="my post" className='icon-links'>
                  <img src={feed} alt='Your feed' className='bottom-images' id='user-feed-icon'/>
              </Link>
              <Link to="/awards" label="my awards" className='icon-links'>
                  <img src={awards} alt='Your awards' className='bottom-images' id='user-awards-icon'/>
              </Link>
            </section>
        </section>
    )
}