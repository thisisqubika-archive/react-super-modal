import React from 'react';
import { render } from 'react-dom';

import SimpleExample from './components/SimpleExample';
import './styles/main.css';

render(
  <div id="app">
    <h1>Simple Example</h1>
    <SimpleExample />
  </div>,
  document.getElementById('root'),
);
