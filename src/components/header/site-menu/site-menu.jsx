import React from 'react';
import SiteMenuLink from './site-menu-link/site-menu-link';

import {MENU_ROUTES} from '../../../const';
import './site-menu.scss';

function SiteMenu() {

  const items = Object.keys(MENU_ROUTES).map((item) =>
    <li key={item} className="site-menu__item"><SiteMenuLink item={item} /></li>);

  return (
    <ul className="site-menu">
      {items}
    </ul>
  );
}

export default SiteMenu;
