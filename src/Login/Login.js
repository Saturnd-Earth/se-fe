import React, { useState } from 'react';
import { showMap } from '../mapActions.js'
import { useHistory } from 'react-router-dom'
import { LOG_IN } from '../requests';
import { useMutation } from '@apollo/client';
import '../Scss/base.scss';

function Login(props) {
  let [error, setError] = useState(false)
  let [userLogin, {data, loading}] = useMutation(LOG_IN);

  let input = {
    password: '',
    username: ''
  }
  let history = useHistory();
  let handleInput = (e) => {
    input[e.target.name] = e.target.value
  }

  let login = (e) => {
    let {username, password} = input;
    e.preventDefault();
    userLogin({
      variables: {
        username,
        password
      }
    })
  }

  if(loading){
    return(
      <p>Loading...</p>
    )
  } else {
    console.log("data", data)
    console.log("user data", data)
  }

  if(data){
    showMap()
    props.setUserData(data)
    history.push('/')
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
          onClick={login}
          value="Login"
        />
      </form>
    </section>
  )
}

export default Login;
