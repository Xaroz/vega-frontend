import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export interface PublicRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
  isAuthenticated: boolean;
}

export const PublicRoute: React.FC<PublicRouteProps> = (
  props: PublicRouteProps
) => {
  const { component: Component, isAuthenticated, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props => {
        return !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};
