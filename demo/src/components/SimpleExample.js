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
