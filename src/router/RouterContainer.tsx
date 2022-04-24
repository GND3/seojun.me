import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import Home from '../pages/Home/Home';
import rootReducer from '../store';

const store = createStore(rootReducer);

const RouterContainer = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </Provider>
  );
};
export default RouterContainer;
