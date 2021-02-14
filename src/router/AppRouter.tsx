import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import { PrivateRoute } from '../router/PrivateRoute';
import { ChatPage } from '../pages/ChatPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

export const AppRouter: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route exact path="/auth/login" component={LoginPage} />
        {/* <Route exact path="/auth/register" component={RegisterPage} /> */}
        <PrivateRoute
          exact
          path="/auth/register"
          component={RegisterPage}
          isAuthenticated={isAuthenticated}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
