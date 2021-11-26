import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {INFO_ROUTES} from '../../../../const';
import './info-menu-link.scss';

function InfoMenuLink({item}) {

  return (
    <Link to={`/${INFO_ROUTES[item]}`} className="info-menu-link">{item}</Link>
  );
}

InfoMenuLink.propTypes = {
  item: PropTypes.string.isRequired,
};

export default InfoMenuLink;
