import React from 'react';
import PropTypes from 'prop-types';

import './breadcrumbs.scss';

function Breadcrumbs({list, className}) {

  const items = list.map((item) => <li className="breadcrumbs__item" key={item}>{item}</li>);

  return (
    <ul className={className}>{items}</ul>
  );
}

Breadcrumbs.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string.isRequired,
};

export default Breadcrumbs;
