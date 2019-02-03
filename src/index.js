import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import './main.css';
import './normalize.css';
import App from './modules/common/index';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Material Icons'],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/#">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
