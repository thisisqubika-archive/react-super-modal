# React Modals
An opinionated React modals library based on UX patterns and principles.

## Install

`npm install react-modals`

or

`yarn add react-modals`

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
| domElement      | The DOM element in which the modal is going to render. It can be a string for a query selection, or a dom node | body         |
| isOpen          | Defines if the modal is visible or not        | false         |
| showCloseButton | Defines if the close button is visible or not | true          |
| onClose         | Callback when the close button is pressed     | N/A           |

### Examples
Show modal on button click
```
import React, { Component } from 'react';
import Modal from 'react-modals';

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
