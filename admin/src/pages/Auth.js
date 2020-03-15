import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';
import { connect } from "react-redux";
import { loginAction } from "../redux/actions/loginAction";


const LOGIN_QUERY = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

const AuthPage = props => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')
  const [handleSubmit, { data, error }] = useLazyQuery(LOGIN_QUERY, { errorPolicy: 'all' });

  const handleError = (error) => error && (<div> Bad: {error.graphQLErrors.map(({ message }, i) => (
    <span key={i}>{message}</span>
  ))}
  </div>)
  if (data) {
    console.log(data.login.token)

    props.loginAction(data.login.token)
  }

  return (<form>
    <div>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={(e) => { setemail(e.target.value) }}></input>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={(e) => { setpassword(e.target.value) }}></input>
    </div>
    {handleError(error)}
    <button type="button" onClick={() => handleSubmit({
      variables: {
        email, password
      }
    })}>Submit</button>
  </form>)

}

export default connect(
  null,
  { loginAction }
)(AuthPage);

