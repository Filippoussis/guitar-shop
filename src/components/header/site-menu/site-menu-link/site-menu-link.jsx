import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {MENU_ROUTES} from '../../../../const';
import './site-menu-link.scss';

function SiteMenuLink({item}) {

  return (
    <Link to={`/${MENU_ROUTES[item]}`} className="site-menu-link">{item}</Link>
  );
}

SiteMenuLink.propTypes = {
  item: PropTypes.string.isRequired,
};

export default SiteMenuLink;
