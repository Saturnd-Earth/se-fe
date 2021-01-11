import React from 'react'
import { useHistory } from 'react-router-dom'
import { USER_LOGIN } from '../requests';
import '../Scss/base.scss';

function Login() {
  let input = {
    password: '',
    username: ''
  }
  let history = useHistory();
  let handleInput = (e) => {
    input[e.target.name] = e.target.value
  }

  let login = (e) => {
    e.preventDefault();
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
