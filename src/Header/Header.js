import React from 'react';
import home from '../images/home.png'
import post from '../images/post.png'
import feed from '../images/user-feed.png'
import awards from '../images/awards.png'
import seLogo from '../images/se-logo.png'

export default function Header() {
    return (
        <section>
            <section className='header-top'>
                <img src={seLogo} alt='Saturn`d Earth Logo' className='images' id='se-logo'/>
                <h1 className='header-text'>Saturn'd Earth</h1>
            </section>
            <section className='header-bottom'>
                <img src={home} alt='Home' className='images' id='se-logo'/>
                <img src={post} alt='Add a post' className='images' id='make-post'/>
                <img src={feed} alt='Your feed' className='images' id='user-feed'/>
                <img src={awards} alt='Your awards' className='images' id='user-awards'/>
            </section>
        </section>
    )
}