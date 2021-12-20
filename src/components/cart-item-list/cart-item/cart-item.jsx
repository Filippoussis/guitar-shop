import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import {guitarProp} from '../../../props/guitar';

import ModalDeleteFromCart from './modal-delete-from-cart/modal-delete-from-cart';

import {ReactComponent as DeleteButton} from '../../../images/icon/close.svg';

import {addItem, decrementItem, setActiveItem, selectActiveItem, updateCountItem} from '../../../store/slices/cart';

import {setNoBodyScroll, setBodyScroll, getValueNumber} from '../../../utils';
import {MIN_GUITAR_COUNT} from '../../../const';

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

  const handleDeleteButton = () => {
    dispatch(setActiveItem(item));
    setNoBodyScroll();
  };

  const handleDecrementButton = () => {
    if (count === MIN_GUITAR_COUNT) {
      dispatch(setActiveItem(item));
      setNoBodyScroll();
      return;
    }

    dispatch(decrementItem(id));
    setBodyScroll();
  };

  const handleChangeInput = (evt) => {
    const target = getValueNumber(evt.target.value);

    const updatedData = {
      id: item.id,
      value: target < 1 ? 1 : target,
    };

    dispatch(updateCountItem(updatedData));
  };

  return (
    <>
      <article className="cart-item">
        <div className="cart-item__col cart-item__col--left">
          <div>
            <button
              className="cart-item__button-delete"
              aria-label="Кнопка Удалить из корзины"
              onClick={handleDeleteButton}
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
            <button className="cart-item-counter__button" onClick={handleDecrementButton} aria-label="decrement-count">-</button>
            <input
              className="cart-item-counter__input"
              type="text"
              value={count}
              onChange={handleChangeInput}
            />
            <button className="cart-item-counter__button" onClick={() => dispatch(addItem(item))} aria-label="increment-count">+</button>
          </div>
          <p className="cart-item__price cart-item__price--total">{sum.toLocaleString()} &#x20bd;</p>
        </div>
      </article>
      {Object.keys(activeItem).length !== 0 && <ModalDeleteFromCart item={activeItem} />}
    </>
  );
}

CartItem.propTypes = {
  item: guitarProp,
  count: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
};

export default CartItem;
