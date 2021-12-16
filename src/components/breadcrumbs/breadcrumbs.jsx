import React from 'react';
import PropTypes from 'prop-types';

import BreadcrumbsLink from './breadcrumbs-link/breadcrumbs-link';

import './breadcrumbs.scss';

function Breadcrumbs({list, className}) {

  const items = list.map((item) => <li className="breadcrumbs__item" key={item}><BreadcrumbsLink item={item} /></li>);

  return (
    <ul className={className}>{items}</ul>
  );
}

Breadcrumbs.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string.isRequired,
};

export default Breadcrumbs;
