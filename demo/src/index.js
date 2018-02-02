import React from 'react';
import { render } from 'react-dom';
import 'react-modals/src/styles/main.css';

import SimpleExample from './components/SimpleExample';

render(
  <div id="app">
    <h1>Simple Example</h1>
    <SimpleExample />
  </div>,
  document.getElementById('root'),
);
