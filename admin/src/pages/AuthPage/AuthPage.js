/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginAction } from '../../redux/actions/userActions';
import { calculateExpirationTime } from '../../utils/calculateTime';
import withData from '../../containers/withData';
import LOGIN_QUERY from '../../graphql/loginQuery';
import { useAppState } from '../../context/AppContext';

const AuthPage = (props) => {
  const [, dispatch] = useAppState();
  // const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleError = (err) =>
    err && (
      <div>
        Bad:
        {err.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </div>
    );

  if (props.data && props.data.login) {
    dispatch(
      loginAction(
        props.data.login.token,
        calculateExpirationTime(props.data.login.tokenExpiration)
      )
    );
    return <Redirect to="/content" />;
  }
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </div>
      {handleError(props.error)}
      <button
        type="button"
        onClick={() =>
          props.handleSubmit({
            variables: {
              email,
              password,
            },
          })
        }
      >
        Submit
      </button>
    </form>
  );
};

export default withData({ query: LOGIN_QUERY, lazy: true })(AuthPage);
