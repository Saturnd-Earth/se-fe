import React, { useState, useEffect } from 'react'
import '../Scss/base.scss';
import { NavLink } from 'react-router-dom';

import login from '../images/login-white.png';
import logout from '../images/logout-white.png';
import signup from '../images/sign-up-blue.png';

export default function Header_Top_Button() {
  const [logOn, setlogOn] = useState(false);

  if (logOn === false) {
    return (
      <section className='header-top-buttons'>
      <NavLink to='/signup' className='header-top-buttons'>
      <button className='logon'>
          <img
            src={signup}
            alt='Sign up'
            label='sign up button'
            className='sign-up-button logon-icons'
          />
        </button>
      </NavLink>
      <NavLink to='/login' className='header-top-buttons'>
        <button className='logon'>
          <img
            src={login}
            alt='Log in'
            label='log in and out button'
            className='sign-in-button logon-icons'
          />
        </button>
      </NavLink>
      </section>
    )
  } else {
    return (
      <section className='header-top-buttons logout-section' onClick={() => setlogOn(false)}>
        <button className='logon'>
          <img
            src={logout}
            alt='Log out'
            label='log in and out button'
            className='sign-in-button logon-icons'
          />
        </button>
      </section>
    )
  }
}
