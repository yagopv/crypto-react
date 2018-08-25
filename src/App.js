import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';

import createRoutes from './router/routes';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';
import history from './router/history';
import { Switch } from 'react-router-dom';
import Nav from 'components/Nav';

const routes = createRoutes();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Grid fluid>
          <Nav />
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} routes={routes} />
            ))}
          </Switch>
        </Grid>
      </Router>
    );
  }
}

export default App;
