import React from 'react';
import '../Scss/base.scss';
import HeaderBottomButton from './Header_Bottom_Button.js'
import HeaderTopButton from './Header_Top_Button.js'

import seLogo from '../images/se-logo.png';

export default function Header() {
    return (
        <section>
            <section className='header-top'>
                <img src={seLogo} alt='Saturn`d Earth Logo' id='se-logo'/>
                <h1 className='header-text'>Saturn'd Earth</h1>
                <HeaderTopButton/>
            </section>
            <HeaderBottomButton/>
        </section>
    )
}
