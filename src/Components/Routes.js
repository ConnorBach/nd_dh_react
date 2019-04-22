import React from 'react';
import { Route, Router } from 'react-router-dom';
import Callback from './Callback';
import App from '../App';
import Auth from '../utils/auth';
import history from '../history';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => (
  <Router history={history}>
    <div>
      <Route path="/" render={props => <App auth={auth} {...props} />} />
      <Route
        path="/callback"
        render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />;
        }}
      />
    </div>
  </Router>
);
