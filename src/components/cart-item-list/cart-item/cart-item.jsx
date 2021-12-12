import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import ModalDeleteFromCart from './modal-delete-from-cart/modal-delete-from-cart';

import {ReactComponent as DeleteButton} from '../../../images/icon/close.svg';

import {addItem, deleteItem, decrementItem, setActiveItem, selectActiveItem} from '../../../store/slices/cart';

import './cart-item.scss';

const GUITAR_TYPE = {
  'acoustic': 'Aкустическая гитара',
  'electro': 'Электрогитара',
  'ukulele': 'Укулеле',
};

function CartItem({item, count, sum}) {

  const dispatch = useDispatch();
  const activeItem = useSelector(selectActiveItem);

  const {id, title, price, smallImage, bigImage, article, type, strings} = item;

  const handleDecrementCount = () => {
    if (count === 1) {
      dispatch(setActiveItem(item));
      return;
    }

    dispatch(decrementItem(id));
  };

  return (
    <>
      <article className="cart-item">
        <div className="cart-item__col cart-item__col--left">
          <div>
            <button
              className="cart-item__button-delete"
              aria-label="Кнопка Удалить из корзины"
              onClick={() => dispatch(deleteItem(id))}
            >
              <DeleteButton />
            </button>
          </div>
          <div className="cart-item__picture">
            <img
              src={`./assets/images/${smallImage}`}
              srcSet={`./assets/images/${bigImage}`}
              alt={title}
              width="48"
              height="124"
            >
            </img>
          </div>
          <div className="cart-item__description">
            <h4>{GUITAR_TYPE[type].toUpperCase()} {title}</h4>
            <p className="cart-item__text">Артикул: {article}</p>
            <p className="cart-item__text">{GUITAR_TYPE[type]}, {strings} струнная</p>
          </div>
        </div>
        <div className="cart-item__col cart-item__col--right">
          <p className="cart-item__price cart-item__price--alone">{price.toLocaleString()} &#x20bd;</p>
          <div className="cart-item-counter">
            <button className="cart-item-counter__button" onClick={handleDecrementCount}>-</button>
            <span className="cart-item-counter__value">{count}</span>
            <button className="cart-item-counter__button" onClick={() => dispatch(addItem(item))}>+</button>
          </div>
          <p className="cart-item__price cart-item__price--total">{sum.toLocaleString()} &#x20bd;</p>
        </div>
      </article>
      {Object.keys(activeItem).length !== 0 && <ModalDeleteFromCart item={activeItem} />}
    </>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
};

export default CartItem;
