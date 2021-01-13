import { showMap } from '../mapActions.js'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../requests';
import '../Scss/base.scss';

export function SignUp() {
  let [error, setError] = useState(false)
  let input = {
    password: '',
    username: ''
  }
  let history = useHistory();
  let [signUpUser] = useMutation(CREATE_USER);

  let handleInput = (e) => {
    input[e.target.name] = e.target.value
  }

  let signUp = (e) => {
    let {username, password} = input
    e.preventDefault()
    signUpUser({
      variables: {
        username,
        password
      }
    }).then( response => {
      history.push('/')
      showMap()
      console.log(response)
    })
    .catch( err => {
      console.log(err)
      setError(true)
    })
  }

  return (
    <section className='sign-up-section'>
      <form className='sign-up-login-form'>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="sign-up-loging-input"
          onInput={handleInput}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="sign-up-loging-input password"
          onInput={handleInput}
        />
        <input
          type="submit"
          placeholder="register"
          className="sumbit-loging"
          onClick={signUp}
          value="Sign up"
        />
        {error ? 'Looks like that user already exists! Select a different user name' : <></>}
      </form>
    </section>
  )
}
