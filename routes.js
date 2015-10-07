/** @flow */
import React from 'react';
import Router from 'react-router';

const {
  DefaultRoute,
  Route,
  NotFoundRoute,
} = Router;

import About from'./handlers/About';
import App from './handlers/Base';
import Blog from'./handlers/Blog';
import Home from'./handlers/Home';
import NotFound from './handlers/NotFound';

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="about" path="about" handler={About} />
    <Route name="blog" path="blog" handler={Blog} />
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

export default routes;

