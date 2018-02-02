import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.css';

class Modal extends React.PureComponent {
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
    ReactDOM.createPortal(this.renderModalMarkup(), this.domElement);
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.domElement);
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

Modal.propTypes = {
  children: React.PropTypes.any,
};

export default Modal;
