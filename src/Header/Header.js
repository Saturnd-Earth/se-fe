import React from 'react';
import './Header.scss'

import home from '../images/house-white.png'
import post from '../images/post-white.png'
import feed from '../images/user-white.png'
import awards from '../images/award-white.png'
import seLogo from '../images/se-logo.png'

export default function Header() {
    return (
        <section>
            <section className='header-top'>
                <img src={seLogo} alt='Saturn`d Earth Logo' id='se-logo'/>
                <h1 className='header-text'>Saturn'd Earth</h1>
            </section>
            <section className='header-bottom'>
                <img src={home} alt='Home' className='bottom-images' id='home-icon'/>
                <img src={post} alt='Add a post' className='bottom-images' id='make-post-icon'/>
                <img src={feed} alt='Your feed' className='bottom-images' id='user-feed-icon'/>
                <img src={awards} alt='Your awards' className='bottom-images' id='user-awards-icon'/>
            </section>
        </section>
    )
}