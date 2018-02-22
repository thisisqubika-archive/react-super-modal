import React from 'react';
import { render } from 'react-dom';
import 'react-super-modal/src/styles/main.css';

import Example from './components/Example';
import RandomContent from './components/RandomContent';

const Demo = () => (
  <div>
    <h1>Simple Example</h1>
    <Example>
      <RandomContent />
    </Example>

    <input type="text" placeholder="Input Placeholder" />

    <h1>Example with large content.</h1>
    <Example>
      <RandomContent />
      <div
        style={{
          width: '1200px',
          backgroundColor: 'red',
        }}
      >
        Large Content
      </div>
    </Example>

    <h1>Example With Inputs</h1>
    <Example>
      <RandomContent />
      <input type="text" placeholder="Input placeholder" />
    </Example>

    <h1>Example With maxWidth </h1>
    <Example maxWidth="250px">
      <RandomContent />
      <input type="text" placeholder="Input placeholder" />
    </Example>

    <h1>Example With closeOnOverlayClick = false </h1>
    <Example
      closeOnOverlayClick={false}
    >
      <RandomContent />
      <input type="text" placeholder="Input placeholder" />
    </Example>

    <h1>Example With closeOnEscapePress = false </h1>
    <Example
      closeOnEscapePress={false}
    >
      <RandomContent />
      <input type="text" placeholder="Input placeholder" />
    </Example>

    <h1>Example With showCloseButton = false </h1>
    <Example
      showCloseButton={false}
    >
      <RandomContent />
      <input type="text" placeholder="Input placeholder" />
    </Example>

    <h1>Dark theme example </h1>
    <Example
      backgroundColor="#000000"
      closeButtonColor="#FFFFFF"
    >
      <RandomContent color="#FFFFFF" />
      <input type="text" placeholder="Input placeholder" />
    </Example>
  </div>
);

render(<div id="app"> <Demo /></div>, document.getElementById('root'));
