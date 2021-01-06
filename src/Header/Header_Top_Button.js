import React, { useState, useEffect } from 'react'
import '../Scss/base.scss';

import login from '../images/login-white.png';
import logout from '../images/logout-white.png';
import signup from '../images/sign-up-blue.png';

export default function Header_Top_Button() {
  const [logOn, setlogOn] = useState(false);

if (logOn === false) {
  return (
    <section className='header-top-buttons'> 
      <button className='logon' onClick={() => setlogOn(true)}>
        <img 
          src={signup} 
          alt='sign up button' 
          label='sign up button'
          className='sign-up-button logon-icons'
        />
        Join
      </button>
      <button className='logon' onClick={() => setlogOn(true)}>
        <img 
          src={login}
          alt='login button' 
          label='log in and out button'
          className='sign-in-button logon-icons'
        />
        login 
      </button>
    </section>
  )
} else {
  return (
    <section className='header-top-buttons' onClick={() => setlogOn(false)}> 
      <button className='logon'>
        <img 
          src={signup} 
          alt='sign up button' 
          label='sign up button'
          className='sign-up-button logon-icons'
        />
        Join
      </button>
      <button className='logon' onClick={() => setlogOn(false)}>
        <img 
          src={logout} 
          alt='login button' 
          label='log in and out button'
          className='sign-in-button logon-icons'
        />
        logout 
      </button>
    </section>
  )
}

}