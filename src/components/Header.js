import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ heading }) => (
  <div style={{ backgroundColor: '#000000', color: '#eeeeee' }}>
    <img
      src="https://s3.ap-south-1.amazonaws.com/mpaani-corp/images/logo-white.png"
      alt="mpaani logo"
    />
    <h2 style={{ marginLeft: 20, display: 'inline' }}>{heading}</h2>
  </div>
);

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Header;
