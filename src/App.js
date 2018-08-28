import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';

import createRoutes from 'services/routing/routes';
import RouteWithSubRoutes from 'services/routing/RouteWithSubRoutes';
import history from 'services/routing/history';
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
