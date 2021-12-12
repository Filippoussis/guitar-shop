import React from 'react';

import {ReactComponent as Star} from '../../images/icon/star.svg';

import './stars.scss';

const STARS = ['1', '2', '3', '4', '5'];

function Stars() {

  const items = STARS.map((item) => <li key={item} className="stars__item"><Star /></li>);

  return (
    <ul className="stars">{items}</ul>
  );
}

export default Stars;
