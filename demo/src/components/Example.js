import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-super-modal';

import RandomContent from './RandomContent';

class Example extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ isModalOpen: true });
  }

  hideModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { isModalOpen } = this.state;
    const {
      maxWidth,
      closeOnOverlayClick,
      showCloseButton,
      closeOnEscapePress,
      backgroundColor,
      overlayColor,
      closeButtonColor,
      children,
    } = this.props;

    return (
      <div>
        <button onClick={() => this.showModal()}>Show Modal</button>

        <Modal
          isOpen={isModalOpen}
          onClose={this.hideModal}
          maxWidth={maxWidth}
          closeOnEscapePress={closeOnEscapePress}
          closeOnOverlayClick={closeOnOverlayClick}
          showCloseButton={showCloseButton}
          backgroundColor={backgroundColor}
          overlayColor={overlayColor}
          closeButtonColor={closeButtonColor}
        >
          <div>
            {children}
          </div>
        </Modal>
      </div>
    );
  }
}

Example.propTypes = {
  maxWidth: PropTypes.string,
  closeOnOverlayClick: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  closeOnEscapePress: PropTypes.bool,
  backgroundColor: PropTypes.string,
  overlayColor: PropTypes.string,
  closeButtonColor: PropTypes.string,
  children: PropTypes.node,
};

export default Example;
