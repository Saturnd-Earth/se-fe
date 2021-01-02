import { gql, useMutation } from '@apollo/client';
import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'

const USER_SIGNUP = gql`
  mutation {
    createUser(input:{
      username: $username,
      password: $password
    })
    {
      user{
        id
        username
      }
    }
  }
`;

function SignUp() {
  let input = {
    password: '',
    username: ''
  }
  let history = useHistory();
  let [signUpUser, { data }] = useMutation(USER_SIGNUP);

  let handleInput = (e) => {
    input[e.target.name] = e.target.value
  }

  let signUp = (e) => {
    e.preventDefault()
    // signUpUser({
      // variables: {
        // password: input.password,
        // username: input.username
      // }
    // })
    window.setTimeout( () => {
      console.log(data)
    }, 1)
    history.push('/')
  }

  return (
    <section>
      <form>
        <input type="text" placeholder="username" name="username" onInput={handleInput}/>
        <input type="password" placeholder="password" name="password" onInput={handleInput}/>
        <input type="submit" placeholder="register" onClick={signUp} value="Sign up"/>
      </form>
    </section>
  )
}

export default SignUp;
