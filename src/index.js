import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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
    const { children } = this.props;

    return (
      <div>
        {children}
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
};

Modal.propTypes = {
  domElement: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  showCloseButton: PropTypes.bool,
};
