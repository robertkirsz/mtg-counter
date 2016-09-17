import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, HomePage, NotFoundPage } from './components';
// import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
// import AboutPage from './components/AboutPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="*" component={NotFoundPage} />
    {/* <Route path="fuel-savings" component={FuelSavingsPage} /> */}
    {/* <Route path="about" component={AboutPage} /> */}
  </Route>
);
