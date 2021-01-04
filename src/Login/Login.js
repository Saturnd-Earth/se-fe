import { gql, useQuery } from '@apollo/client'
import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'

const USER_LOGIN = gql`
  query users($name: name, $password: password) {
    user(name: $name, password: $password) {
      id
    }
  }
`;

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
