import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from './reducers';

const middlewares = [];

export default () =>
  createStore(reducers, composeWithDevTools({})(applyMiddleware(...middlewares)));
