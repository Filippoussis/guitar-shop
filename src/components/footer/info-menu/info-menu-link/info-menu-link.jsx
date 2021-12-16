import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './info-menu-link.scss';

function InfoMenuLink({item}) {

  return (
    <Link to="#" className="info-menu-link">{item}</Link>
  );
}

InfoMenuLink.propTypes = {
  item: PropTypes.string.isRequired,
};

export default InfoMenuLink;
