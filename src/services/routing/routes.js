import React from 'react';
import Loadable from 'react-loadable';

const routeConfig = [
  {
    path: '/',
    exact: true,
    getModules: () => import('scenes/Tickers')
  },
  {
    path: '/dashboard',
    getModules: () => import('scenes/Tickers')
  },
  {
    path: '/about',
    getModules: () => import('scenes/About')
  },
  {
    path: '/not-found',
    getModules: () => import('scenes/NotFound')
  }
];

const getRoute = ({ path, name, exact, getModules }) => ({
  path,
  name,
  exact,
  component: Loadable({
    loader: getModules,
    loading: () => {
      return <span>loading...</span>;
    },
    delay: 300
  })
});

export default function createRoutes() {
  return routeConfig.map(route => getRoute(route));
}
