import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// export interface GuardedRouteProps {
//   component: JSX.Element;
//   check: boolean;
//   path: string;
//   redirectTo?: string;
// }

const GuardedRoute = ({ component, check, redirectTo, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return check ? (
          component
        ) : redirectTo ? (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: location },
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default GuardedRoute;
