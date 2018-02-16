# React Super Modal [![npm version](https://badge.fury.io/js/react-super-modal.svg)](https://badge.fury.io/js/react-super-modal) [![Build Status](https://travis-ci.org/moove-it/react-super-modal.svg?branch=master)](https://travis-ci.org/moove-it/react-super-modal)
An opinionated React modals library based on UX patterns and principles.

## Install

`npm install react-super-modal`

or

`yarn add react-super-modal`

## How to use

*React Modals* is just a component that will render it's children inside a modal.
```
<Modal isOpen={showModal} onClose={onModalClose}>
  ...
  Modal Content
  ...
</Modal>
```

### Configuration
| Property        | Description                                   | Default Value |
|-----------------|-----------------------------------------------|---------------|
| domElement      | The DOM element (not rendered by react) in which the modal is going to render. It can be a string for a query selection, or a dom node | body         |
| isOpen          | Defines if the modal is visible or not        | false         |
| maxWidth        | Defines the max width of the modal for desktop and tables viewports. For mobile it always takes a presetted value | 640px
| showCloseButton | Defines if the close button is visible or not | true          |
| closeOnOverlayClick | Defines if the modal should be closed when clicking outside it. | true          |
| closeOnEscapePress | Defines if the modal should be closed when escape key is pressed. | true          |
| onClose         | Callback when the close button is pressed     | N/A           |

### Examples
Show modal on button click
```
import React, { Component } from 'react';
import Modal from 'react-super-modal';

class SimpleExample extends Component {
  constructor() {
    super();
    this.state = { modalIsOpen: false };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ modalIsOpen: true });
  }

  hideModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Show Modal</button>
        <Modal isOpen={this.state.modalIsOpen} onClose={this.hideModal}>
          <h1>The content of this modal</h1>
        </Modal>
      </div>
    )
  }
}

export default SimpleExample;
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
