import React, { useState } from 'react'
import '../Scss/base.scss';
import { NavLink } from 'react-router-dom';

import login from '../images/login-white.png';
import logout from '../images/logout-white.png';
import signup from '../images/sign-up-blue.png';

export default function Header_Top_Button(props) {

  if (props.userData === null) {
    return (
      <section className='header-top-buttons'>
      <NavLink to='/se-fe/signup' className='header-top-buttons'>
      <button className='logon sign-up'>
          <img
            src={signup}
            alt='Sign up'
            label='sign up button'
            className='sign-up-button logon-icons'
          />
          <div className='logon-button-text'>
            Sign Up
          </div>
        </button>
      </NavLink>
      <NavLink to='/se-fe/login' className='header-top-buttons'>
        <button className='logon login'>
          <img
            src={login}
            alt='Log in'
            label='log in and out button'
            className='sign-in-button logon-icons'
          />
          <div className='logon-button-text'>
            Login
          </div>
        </button>
      </NavLink>
      </section>
    )
  } else {
    return (
      <section className='header-top-buttons logout-section'>
        <button
          className='logon logout'
          onClick={() => props.setUserData({id: null, username: null})}
        >
          <img
            src={logout}
            alt='Log out'
            label='log in and out button'
            className='sign-in-button logon-icons'
          />
          <div className='logon-button-text'>
            Logout
          </div>
        </button>
      </section>
    )
  }
}
