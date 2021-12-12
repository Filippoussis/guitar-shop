import React from 'react';
import {useSelector} from 'react-redux';

import {selectWithDiscount} from '../../../store/slices/cart';

import './order.scss';

function Order() {

  const total = useSelector(selectWithDiscount);

  return (
    <div className="order">
      <p className="order__total">Всего: {total.toLocaleString()} &#x20bd;</p>
      <button className="order__button">Оформить заказ</button>
    </div>
  );
}

export default Order;
