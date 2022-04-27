import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

const RouterContainer = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};
export default RouterContainer;
