import React from 'react';
import {useSelector} from 'react-redux';

import CartItem from './cart-item/cart-item';

import {selectSlice} from '../../store/slices/cart';

import './cart-item-list.scss';

function CartItemList() {

  const selectedGuitars = useSelector(selectSlice);

  const items = selectedGuitars.map(({item, count, sum}) => <li key={item.id}><CartItem item={item} count={count} sum={sum} /></li>);

  return (
    <ul className="cart-item-list">{items}</ul>
  );
}

export default CartItemList;
