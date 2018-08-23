import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import createRoutes from './router/routes';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';
import history from './router/history';
import { Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const routes = createRoutes();

ReactDOM.render(
  <Router history={history}>
    <App>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} routes={routes} />
        ))}
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
