import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {ReactComponent as CloseButton} from '../../../../images/icon/close.svg';

import {setBodyScroll} from '../../../../utils';

import {deleteItem, setActiveItem} from '../../../../store/slices/cart';

import './modal-delete-from-cart.scss';

const GUITAR_TYPE = {
  'acoustic': 'Aкустическая гитара',
  'electro': 'Электрогитара',
  'ukulele': 'Укулеле',
};

function ModalDeleteFromCart({item}) {

  const {id, title, price, smallImage, bigImage, article, type, strings} = item;

  const dispatch = useDispatch();

  const handleClickButtonDelete = () => {
    dispatch(deleteItem(id));
    dispatch(setActiveItem({}));
  };

  const handleClickButtonContinue = () => {
    dispatch(setActiveItem({}));
  };

  const handleClickClose = () => {
    setBodyScroll();
    dispatch(setActiveItem({}));
  };

  return (
    <div className="modal-delete-from-cart" onClick={handleClickClose}>
      <div className="modal-delete-from-cart__content" onClick={(evt) => evt.stopPropagation()}>
        <button className="modal-delete-from-cart__close" onClick={handleClickClose} aria-label="Кнопка Закрыть">
          <CloseButton />
        </button>
        <p className="modal-delete-from-cart__title">Удалить этот товар?</p>
        <div className="modal-delete-from-cart__wrapper">
          <div className="modal-delete-from-cart__col">
            <div className="modal-delete-from-cart__picture">
              <img
                src={`./assets/images/${smallImage}`}
                srcSet={`./assets/images/${bigImage}`}
                alt={title}
                width="56"
                height="128"
              >
              </img>
            </div>
            <div className="modal-delete-from-cart__description">
              <h4>Гитара {title}</h4>
              <p className="modal-delete-from-cart__text">Артикул: {article}</p>
              <p className="modal-delete-from-cart__text">{GUITAR_TYPE[type]}, {strings} струнная</p>
              <p className="modal-delete-from-cart__price">Цена: {price} &#x20bd;</p>
            </div>
          </div>
          <div className="modal-delete-from-cart__col modal-delete-from-cart__col--right">
            <button
              className="modal-delete-from-cart__button modal-delete-from-cart__button--delete"
              onClick={handleClickButtonDelete}
            >Удалить товар
            </button>
            <button
              className="modal-delete-from-cart__button modal-delete-from-cart__button--continue"
              onClick={handleClickButtonContinue}
            >Продолжить покупки
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalDeleteFromCart.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ModalDeleteFromCart;
