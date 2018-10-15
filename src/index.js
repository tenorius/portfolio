import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import './index.css';
import './normalize.css';
import App from './App';
import initialState from './redux/reducers/initialState';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Material Icons'],
  },
});

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
