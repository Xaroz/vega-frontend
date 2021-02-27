import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage';

import { AuthRouter } from 'router/AuthRouter';
import { PrivateRoute } from 'router/PrivateRoute';
import { PublicRoute } from 'router/PublicRoute';

export const AppRouter: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/auth"
          component={AuthRouter}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/"
          component={ChatPage}
          isAuthenticated={isAuthenticated}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
