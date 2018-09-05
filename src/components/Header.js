import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name }) => (
  <h1 className="display-3" style={{ textAlign: 'center' }} id="header">
    {name}
  </h1>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
