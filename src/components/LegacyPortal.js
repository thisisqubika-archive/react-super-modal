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
    ReactDOM.unmountComponentAtNode(this.defaultNode || this.props.node);
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }
    this.defaultNode = null;
    this.portal = null;
  }

  renderPortal() {
    const { node, children } = this.props;
    if (!node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
    const childrenElement = typeof children.type === 'function' ? React.cloneElement(children) : children;

    this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      childrenElement,
      node || this.defaultNode,
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
