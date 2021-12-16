import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './catalog-menu-link.scss';

function CatalogMenuLink({item}) {

  return (
    <Link to="#" className="catalog-menu-link">{item}</Link>
  );
}

CatalogMenuLink.propTypes = {
  item: PropTypes.string.isRequired,
};

export default CatalogMenuLink;
