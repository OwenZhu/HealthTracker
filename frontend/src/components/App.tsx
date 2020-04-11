import React from 'react';
import Amplify from 'aws-amplify';
import { Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import history from '../historyConfig';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import AuthPage from 'components/AuthPage';
import LandingPage from 'components/LandingPage';
import Dashboard from 'components/Dashboard';
import { PageContextProvider } from 'contexts/pageContext';
import { RoutePath } from 'constants/config';

Amplify.configure({
  Auth: {
    region: process.env.REACT_APP_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_CLIENT_ID,
  },
});

const muiTheme = createMuiTheme({
  palette: { }
});

const App: React.FC<any> = _ => {
  // TODO: redirect to Dashboard after
  return (
    <Router history={history}>
      <MuiThemeProvider theme={muiTheme}>
        <PageContextProvider>
          <Switch>
            <Route path={RoutePath.landingPage} component={LandingPage} />
            <Route path={RoutePath.authPage} component={AuthPage} />
            <Route path={RoutePath.dashboard} component={Dashboard} />
            <Redirect from="/" to={RoutePath.landingPage} />
          </Switch>
        </PageContextProvider>
      </MuiThemeProvider>
    </Router>
  );
};
export default App;
