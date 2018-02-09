import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CloseButton from './components/CloseButton';

import './styles/main.css';

export default class Modal extends React.PureComponent {
  constructor(props) {
    super(props);

    const { domElement } = props;

    if (typeof domElement === 'string') {
      this.domElement = document.querySelector(domElement);
    } else {
      this.domElement = domElement;
    }

    this.state = {};
  }

  renderModalMarkup() {
    const {
      children,
      onClose,
      closeOnOverlayClick,
      showCloseButton,
    } = this.props;

    const onOverlayClick = () => {
      if (closeOnOverlayClick) {
        onClose();
      }
    };

    return (
      <div
        onClick={onOverlayClick}
        role="button"
        tabIndex={0}
        className="modal-overlay"
      >
        <div className="modal-container">
          {showCloseButton &&
            <div
              className="close-button"
              onClick={onClose}
            >
              <CloseButton />
            </div>
          }
          {children}
        </div>
      </div>
    );
  }

  render() {
    const { isOpen } = this.props;

    if (!isOpen) return null;

    return ReactDOM.createPortal(this.renderModalMarkup(), this.domElement);
  }
}

Modal.defaultProps = {
  domElement: 'body',
  isOpen: false,
  onClose: () => {},
  showCloseButton: true,
  closeOnOverlayClick: true,
};

Modal.propTypes = {
  domElement: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  closeOnOverlayClick: PropTypes.bool,
};
