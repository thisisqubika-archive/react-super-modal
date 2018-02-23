import React from 'react';
import { render } from 'react-dom';
import PlaceHolder from './images/placeholder.png';
import 'milligram/dist/milligram.css';
import 'react-super-modal/src/styles/main.css';
import './styles/main.css';


import Example from './components/Example';
import RandomContent from './components/RandomContent';

const Brand = () => (
  <div className="brand">
    <div className="logo" style={{ backgroundImage: `url(${PlaceHolder})` }} />
    <h2>React Super Modal</h2>
  </div>
);

const Examples = () => (
  <div className="examples">
    <h3>Simple example.</h3>

    {/* <Modal
      isOpen={isModalOpen}
      onClose={this.hideModal}
      maxWidth="850px"
      closeOnOverlayClick
      backgroundColor={backgroundColor}
      overlayColor={overlayColor}
      closeButtonColor={closeButtonColor}
    > */}

    <pre>
      <div><em> {"<Modal"}  </em></div>
      <div><em> &nbsp; {"isOdiven"}</em></div>
      <div><em> &nbsp; {"maxWidth='850divx'"}</em></div>
      <div><em> &nbsp; {"closeOnOverlayClick"}</em></div>
      <div><em> {">"}</em></div>
    </pre>

    <Example>
      <RandomContent />
    </Example>

    <h3>Example with large content.</h3>
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

    <h3>Example with maxWidth.</h3>
    <Example maxWidth="250px">
      <RandomContent />
    </Example>

    <h3>Example using closeOnOverlayClick = false.</h3>
    <Example
      closeOnOverlayClick={false}
    >
      <RandomContent />
    </Example>

    <h3>Example using closeOnEscapePress = false.</h3>
    <Example
      closeOnEscapePress={false}
    >
      <RandomContent />
    </Example>

    <h3>Example using showCloseButton = false.</h3>
    <Example
      showCloseButton={false}
    >
      <RandomContent />
    </Example>

    <h3>Dark theme example.</h3>
    <Example
      backgroundColor="#000000"
      closeButtonColor="#FFFFFF"
    >
      <RandomContent color="#FFFFFF" />
    </Example>
  </div>
);

const Demo = () => (
  <div>
    <Brand />
    <Examples />
  </div>
);

render(<div id="app"> <Demo /></div>, document.getElementById('root'));
