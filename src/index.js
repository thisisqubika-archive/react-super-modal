import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import './styles/main.css';
import buildStore from './buildStore';
import App from './components/App';

const store = buildStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
