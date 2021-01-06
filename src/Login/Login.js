import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { USER_LOGIN } from '../requests';

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
    <section>
      <form>
        <input type="text" placeholder="username" name="username" onInput={handleInput}/>
        <input type="password" placeholder="password" name="password" onInput={handleInput}/>
        <input type="submit" placeholder="register" onClick={login} value="login"/>
      </form>
    </section>
  )
}

export default Login;
