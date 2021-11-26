import React from 'react';
import CatalogMenuLink from './catalog-menu-link/catalog-menu-link';

import {CATALOG_ROUTES} from '../../../const';
import './catalog-menu.scss';

function CatalogMenu() {

  const items = Object.keys(CATALOG_ROUTES).map((item) =>
    <li key={item} className="catalog-menu__item"><CatalogMenuLink item={item} /></li>);

  return (
    <div className="catalog-menu">
      <h4>Каталог</h4>
      <ul className="catalog-menu__list">
        {items}
      </ul>
    </div>
  );
}

export default CatalogMenu;
