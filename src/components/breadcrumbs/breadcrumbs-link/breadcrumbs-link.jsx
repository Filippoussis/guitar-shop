import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './breadcrumbs-link.scss';

function BreadcrumbsLink({item}) {

  const breadcrumbsPath = item === 'Главная' ? '/' : '#';

  return (
    <Link to={breadcrumbsPath} className="breadcrumbs-link">{item}</Link>
  );
}

BreadcrumbsLink.propTypes = {
  item: PropTypes.string.isRequired,
};

export default BreadcrumbsLink;
