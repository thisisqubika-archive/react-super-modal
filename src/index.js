import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CloseButton from './components/CloseButton';
import { SCROLL_LOCKED_CLASSNAME } from './constants';
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

    this.onEscapePressed = this.onEscapePressed.bind(this);

    this.state = {};
  }

  componentDidUpdate(prevProps) {
    const { isOpen, closeOnEscapePress } = this.props;
    const { prevIsOpen } = prevProps;

    if (!isOpen) this.unlockBodyScroll();
    if (closeOnEscapePress && isOpen !== prevIsOpen) {
      if (isOpen) {
        document.body.addEventListener('keydown', this.onEscapePressed);
      } else {
        document.body.removeEventListener('keydown', this.onEscapePressed);
      }
    }
  }

  onEscapePressed(e) {
    if (e.keyCode === 27) {
      this.props.onClose();
    }
  }

  unlockBodyScroll() {
    this.domElement.classList.remove(SCROLL_LOCKED_CLASSNAME);
  }

  lockBodyScroll() {
    this.domElement.classList.add(SCROLL_LOCKED_CLASSNAME);
  }

  renderModalMarkup() {
    const {
      children,
      onClose,
      closeOnOverlayClick,
      showCloseButton,
      maxWidth,
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
        className="modal-overlay modal-overlay--animated"
      >
        <div
          className="modal-container modal-container--animated"
          style={{ maxWidth }}
        >
          {showCloseButton &&
            <div className="header">
              <div
                className="close-button"
                onClick={onClose}
              >
                <CloseButton />
              </div>
            </div>
          }
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isOpen } = this.props;

    if (!isOpen) return null;

    this.lockBodyScroll();
    return ReactDOM.createPortal(this.renderModalMarkup(), this.domElement);
  }
}

Modal.defaultProps = {
  domElement: 'body',
  isOpen: false,
  onClose: () => {},
  showCloseButton: true,
  closeOnOverlayClick: true,
  closeOnEscapePress: true,
  maxWidth: '640px',
};

Modal.propTypes = {
  domElement: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  closeOnOverlayClick: PropTypes.bool,
  closeOnEscapePress: PropTypes.bool,
  maxWidth: PropTypes.string,
};
