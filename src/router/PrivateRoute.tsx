import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
  isAuthenticated: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = (
  props: PrivateRouteProps
) => {
  const { component: Component, isAuthenticated, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};
