import React, { Component } from 'react';
import Modal from 'react-super-modal';

import RandomContent from './RandomContent';

class SimpleExample extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(backgroundColor, overlayColor, closeButtonColor) {
    this.setState({
      isModalOpen: true,
      backgroundColor,
      overlayColor,
      closeButtonColor,
    });
  }

  hideModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { isModalOpen, backgroundColor, overlayColor, closeButtonColor } = this.state;
    return (
      <div>
        <button onClick={() => this.showModal()}>Show Light Modal</button>
        <button onClick={() => this.showModal('#000000', 'rgba(0,0,0,0.7)', '#FFFFFF')}>Show Dark Modal</button>
        <Modal
          isOpen={isModalOpen}
          onClose={this.hideModal}
          maxWidth="850px"
          closeOnOverlayClick
          backgroundColor={backgroundColor}
          overlayColor={overlayColor}
          closeButtonColor={closeButtonColor}
        >
          <RandomContent color={closeButtonColor} />
        </Modal>
      </div>
    );
  }
}

export default SimpleExample;
