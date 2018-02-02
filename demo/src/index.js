import React from 'react';
import { render } from 'react-dom';
import Modal from 'react-modals';

import './styles/main.css';

render(
  <div id="app">
    <h1>Demo</h1>
    <Modal isOpen>
      <div>This is a modal</div>
    </Modal>
  </div>,
  document.getElementById('root'),
);
