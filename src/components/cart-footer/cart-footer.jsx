import React from 'react';

import Discount from './discount/discount';
import Order from './order/order';

import './cart-footer.scss';

function CartFooter() {
  return (
    <div className="cart-footer">
      <Discount />
      <Order />
    </div>
  );
}

export default CartFooter;
