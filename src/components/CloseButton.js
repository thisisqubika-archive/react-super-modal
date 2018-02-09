import React from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({ onClose, closeButtonColor }) => (
  <div onClick={onClose} className="close-button">
    <svg width="12px" height="12px" viewBox="0 0 24 24" version="1.1">
      <title>ic-close</title>
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
          fill={closeButtonColor}
          fillRule="nonzero"
          // eslint-disable-next-line max-len
          points="1398 557.418057 1395.58286 555 1386 564.586483 1376.41714 555 1374 557.418057 1383.58286 567.00454 1374 576.591023 1376.41714 579.009081 1386 569.422598 1395.58286 579.009081 1398 576.591023 1388.41714 567.00454"
        />
      </g>
    </svg>
  </div>
);

CloseButton.defaultProps = {
  onClose: () => {},
};

CloseButton.propTypes = {
  onClose: PropTypes.func,
  closeButtonColor: PropTypes.string.isRequired,
};

export default CloseButton;
