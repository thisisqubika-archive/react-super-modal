import React from 'react';
import { render } from 'react-dom';
import Modal from 'react-modals';

import './styles/main.css';
import App from './components/App';

  render(
  <div id="app">
    <h1>Demo</h1>
    <Modal isOpen={true} domElement="app">
      <div>'This is a modal'</div>
    </Modal>
  </div>,
  document.getElementById('root'),
);
