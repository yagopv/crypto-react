import React from 'react';
import Loadable from 'react-loadable';

const routeConfig = [
  {
    path: '/',
    exact: true,
    getModules: () => import('../pages/TickerTable')
  },
  {
    path: '/dashboard',
    getModules: () => import('../pages/TickerTable')
  },
  {
    path: '/about',
    getModules: () => import('../pages/About')
  },
  {
    path: '/not-found',
    getModules: () => import('../pages/NotFound')
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
