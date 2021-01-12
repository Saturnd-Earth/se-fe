import React, { useState } from 'react';
import { showMap } from '../mapActions.js'
import { useHistory } from 'react-router-dom'
import { USER_LOGIN } from '../requests';
import { useLazyQuery } from '@apollo/client';
import '../Scss/base.scss';

function Login(props) {
  let [error, setError] = useState(false)
  let [userLogin, {data, loading}] = useLazyQuery(USER_LOGIN);
  
  let input = {
    password: '',
    username: ''
  }
  let history = useHistory();
  let handleInput = (e) => {
    input[e.target.name] = e.target.value
  }

  let login = (e) => {
    let {name, password} = input;
    e.preventDefault();
    userLogin({
      variables: {
        name,
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
  }

  if(data && data.user){
    showMap()
    props.setUserData = data
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
