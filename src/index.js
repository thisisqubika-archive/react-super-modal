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

  componentWillMount() {

  }

  componentDidMount() {
    const { isOpen } = this.props;

    if (isOpen) {
      ReactDOM.createPortal(this.renderModalMarkup(), this.domElement);
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen, onClose } = this.props;
    const { wasOpen } = prevProps;

    if (isOpen && !wasOpen) {
      ReactDOM.createPortal(this.renderModalMarkup(), this.domElement);
    }

    if (!isOpen && wasOpen) {
      ReactDOM.unmountComponentAtNode(this.domElement);

      if (onClose) {
        onClose();
      }
    }
  }

  componentWillUnmount() {
    const { onClose } = this.props;
    ReactDOM.unmountComponentAtNode(this.domElement);

    if (onClose) {
      onClose();
    }
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
    return null;
  }
}

Modal.defaultProps = {
  isOpen: false,
  showCloseButton: true,
};

Modal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  showCloseButton: PropTypes.bool,
};
