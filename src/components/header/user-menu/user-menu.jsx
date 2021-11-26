import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as MapIcon} from '../../../images/icon/map.svg';
import {ReactComponent as SearchIcon} from '../../../images/icon/search.svg';
import {ReactComponent as CartIcon} from '../../../images/icon/cart.svg';

import './user-menu.scss';

function UserMenu() {
  return (
    <div className="user-menu">
      <Link to='/map' className="user-menu__item">
        <MapIcon className="user-menu__link" />
      </Link>
      <Link to='/search' className="user-menu__item">
        <SearchIcon className="user-menu__link" />
      </Link>
      <Link to='/cart' className="user-menu__item">
        <CartIcon className="user-menu__link" />
      </Link>
    </div>
  );
}

export default UserMenu;
