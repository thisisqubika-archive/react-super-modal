import React from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({ isDarkMode }) => (
  isDarkMode ?
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <title>ic-close-white</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g
        id="Icon-Close"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(-1374.000000, -555.000000)"
      >
        <polygon
          id="ic-close-white"
          fill="#FFFFFF"
          fillRule="nonzero"
          // eslint-disable-next-line max-len
          points="1398 557.418057 1395.58286 555 1386 564.586483 1376.41714 555 1374 557.418057 1383.58286 567.00454 1374 576.591023 1376.41714 579.009081 1386 569.422598 1395.58286 579.009081 1398 576.591023 1388.41714 567.00454"
        />
      </g>
    </svg> :
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <title>ic-close-black</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g
        id="Icon-Close"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(-1374.000000, -496.000000)"
      >
        <polygon
          id="ic-close-black"
          fill="#000000"
          fillRule="nonzero"
          // eslint-disable-next-line max-len
          points="1398 498.418057 1395.58286 496 1386 505.586483 1376.41714 496 1374 498.418057 1383.58286 508.00454 1374 517.591023 1376.41714 520.009081 1386 510.422598 1395.58286 520.009081 1398 517.591023 1388.41714 508.00454"
        />
      </g>
    </svg>
);

CloseButton.propTypes = {
  isDarkMode: PropTypes.bool,
};

CloseButton.defaultProps = {
  isDarkMode: false,
};

export default CloseButton;
