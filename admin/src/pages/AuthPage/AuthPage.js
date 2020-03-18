import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { loginAction } from '../../redux/actions/userActions';


const LOGIN_QUERY = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;


const AuthPage = (props) => {
  const history = useHistory();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [handleSubmit, { data, error }] = useLazyQuery(LOGIN_QUERY, { errorPolicy: 'all' });

  const handleError = (err) => err && (
    <div> Bad: {err.graphQLErrors.map(({ message }, i) => (
      <span key={i}>{message}</span>
    ))}
    </div>
  );

  if (data) {
    console.log(data);
    props.loginAction(data.login.token);
    history.push('/users');
  }
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={(e) => { setemail(e.target.value); }} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={(e) => { setpassword(e.target.value); }} />
      </div>
      {handleError(error)}
      <button
        type="button"
        onClick={() => handleSubmit({
          variables: {
            email, password,
          },
        })}
      >Submit
      </button>
    </form>
  );
};

AuthPage.propTypes = {
  loginAction: propTypes.func,
};


export default connect(
  null,
  { loginAction },
)(AuthPage);
