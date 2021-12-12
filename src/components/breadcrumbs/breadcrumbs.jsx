import React from 'react';
import PropTypes, { string } from 'prop-types';

import './breadcrumbs.scss';

function Breadcrumbs({list}) {

  const items = list.map((item) => <li className="breadcrumbs__item" key={item}>{item}</li>);

  return (
    <ul className="breadcrumbs breadcrumbs--cart">{items}</ul>
  );
}

Breadcrumbs.propTypes = {
  list: PropTypes.arrayOf(string).isRequired,
};

export default Breadcrumbs;
