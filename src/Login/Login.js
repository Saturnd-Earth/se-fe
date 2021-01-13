import Loading from '../Loading/Loading.js'
import { LOG_IN } from '../requests';
import React from 'react';
import { showMap } from '../mapActions.js'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client';

function Login(props) {
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

  if(loading) return <Loading />

  if(data){
    showMap()
    props.setUserData(data.signinUser.user)
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
