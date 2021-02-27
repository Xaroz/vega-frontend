import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';

export const AuthRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/register" component={RegisterPage} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};
