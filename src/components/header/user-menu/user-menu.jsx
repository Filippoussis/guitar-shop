import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {ReactComponent as MapIcon} from '../../../images/icon/map.svg';
import {ReactComponent as SearchIcon} from '../../../images/icon/search.svg';
import {ReactComponent as CartIcon} from '../../../images/icon/cart.svg';

import {selectIsCartEmpty, selectCartItemCount} from '../../../store/slices/cart';

import './user-menu.scss';

function UserMenu() {

  const isCartEmpty = useSelector(selectIsCartEmpty);
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <div className="user-menu">
      <Link to='/map' className="user-menu__item" aria-label="Icon Map">
        <MapIcon className="user-menu__link" />
      </Link>
      <Link to='/search' className="user-menu__item" aria-label="Icon Search">
        <SearchIcon className="user-menu__link" />
      </Link>
      <Link to='/cart' className="user-menu__item user-menu__item--cart" aria-label="Icon Cart">
        <CartIcon className="user-menu__link" />
        {!isCartEmpty && <span className="user-menu__cart-item-count">{cartItemCount}</span>}
      </Link>
    </div>
  );
}

export default UserMenu;
