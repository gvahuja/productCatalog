import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ heading }) => (
  <h2>{heading}</h2>
);

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Header;
