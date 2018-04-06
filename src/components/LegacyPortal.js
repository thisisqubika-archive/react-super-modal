// This file is a fallback for a consumer who is not yet on React 16
// as createPortal was introduced in React 16
// Extracted from https://github.com/tajo/react-portal

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Portal extends Component {
  componentDidMount() {
    this.renderPortal();
  }

  componentDidUpdate() {
    this.renderPortal();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.containerNode);
    if (this.containerNode) {
      document.body.removeChild(this.containerNode);
    }
    this.containerNode = null;
    this.portal = null;
  }

  renderPortal() {
    const { node, children } = this.props;

    if ((!node && !this.containerNode) || node.tagName === 'BODY') {
      this.containerNode = document.createElement('div');
      document.body.appendChild(this.containerNode);
    } else {
      this.containerNode = node;
    }
    // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
    const childrenElement = typeof children.type === 'function' ? React.cloneElement(children) : children;

    this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      childrenElement,
      this.containerNode,
    );
  }

  render() {
    return null;
  }
}

Portal.defaultProps = {
  node: null,
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  node: PropTypes.any,
};
