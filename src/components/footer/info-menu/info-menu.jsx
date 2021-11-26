import React from 'react';
import InfoMenuLink from './info-menu-link/info-menu-link';

import {INFO_ROUTES} from '../../../const';
import './info-menu.scss';

function InfoMenu() {

  const items = Object.keys(INFO_ROUTES).map((item) =>
    <li key={item} className="info-menu__item"><InfoMenuLink item={item} /></li>);

  return (
    <div className="info-menu">
      <h4>Информация</h4>
      <ul className="info-menu__list">
        {items}
      </ul>
    </div>
  );
}

export default InfoMenu;
