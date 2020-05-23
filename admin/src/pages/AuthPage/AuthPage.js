/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { loginAction } from '../../state/actions/userActions';
import { calculateExpirationTime } from '../../utils/calculateTime';
import withData from '../../containers/withData';
import LOGIN_QUERY from '../../graphql/queries/loginQuery';
import { useAppState } from '../../context/AppContext';

const AuthPage = ({ queryData, queryError, queryHandleClick }) => {
  const [, dispatch] = useAppState();
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

  if (queryData && queryData.login) {
    dispatch(
      loginAction(
        queryData.login.token,
        calculateExpirationTime(queryData.login.tokenExpiration)
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
      {handleError(queryError)}
      <button
        type="button"
        onClick={() =>
          queryHandleClick({
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
