import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const USER_SIGNUP = gql`
  mutation userSignup($username: String!, $password: String!){
    createUser(input: {
      username: $username
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
  let [error, setError] = useState(false)
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
    let {username, password} = input
    e.preventDefault()
    signUpUser({
      variables: {
        username,
        password
      }
    }).then( response => {
      history.push('/')
      console.log(response)
    })
    .catch( _ => {
      setError(true)
    })
  }

  return (
    <section>
      <form>
        <input type="text" placeholder="username" name="username" onInput={handleInput}/>
        <input type="password" placeholder="password" name="password" onInput={handleInput}/>
        <input type="submit" placeholder="register" onClick={signUp} value="Sign up"/>
        {error ? 'Looks like that user already exists! Select a different user name' : <></>}
      </form>
    </section>
  )
}

export default SignUp;
