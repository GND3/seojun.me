import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import Home from '../pages/Home/Home';
import Signin from '../pages/Signin/Signin';
import Signup from '../pages/Signup/Signup';
import rootReducer from '../store';

const store = createStore(rootReducer);

const RouterContainer = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </BrowserRouter>
    </Provider>
  );
};
export default RouterContainer;
