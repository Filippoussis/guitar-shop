import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {ReactComponent as CloseButton} from '../../../images/icon/close.svg';

import {addItem, setActiveItem, setSuccess} from '../../../store/slices/cart';

import {setBodyScroll} from '../../../utils';
import {KEY_CODE_ESCAPE} from '../../../const';

import './modal-add-to-cart.scss';

const GUITAR_TYPE = {
  'acoustic': 'Aкустическая гитара',
  'electro': 'Электрогитара',
  'ukulele': 'Укулеле',
};

function ModalAddToCart({item}) {

  const {title, price, smallImage, bigImage, article, type, strings} = item;

  const dispatch = useDispatch();

  const handleKeyDownEsc = useCallback((event) => {
    if(event.keyCode === KEY_CODE_ESCAPE) {
      setBodyScroll();
      dispatch(setActiveItem({}));
    }
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDownEsc);

    return () => {
      document.removeEventListener('keydown', handleKeyDownEsc);
    };
  }, [handleKeyDownEsc]);

  const handleClickAddButton = () => {
    dispatch(addItem(item));
    dispatch(setActiveItem({}));
    dispatch(setSuccess(true));
  };

  const handleClickClose = () => {
    setBodyScroll();
    dispatch(setActiveItem({}));
  };

  return (
    <div className="modal-add-to-cart" onClick={handleClickClose}>
      <div className="modal-add-to-cart__content" onClick={(evt) => evt.stopPropagation()}>
        <button className="modal-add-to-cart__close" onClick={handleClickClose} aria-label="Кнопка Закрыть">
          <CloseButton />
        </button>
        <p className="modal-add-to-cart__title">Добавить товар в корзину</p>
        <div className="modal-add-to-cart__wrapper">
          <div className="modal-add-to-cart__item">
            <div className="modal-add-to-cart__picture">
              <img
                src={`./assets/images/${smallImage}`}
                srcSet={`./assets/images/${bigImage}`}
                alt={title}
                width="56"
                height="128"
              >
              </img>
            </div>
            <div className="modal-add-to-cart__description">
              <h4>Гитара {title}</h4>
              <p className="modal-add-to-cart__text">Артикул: {article}</p>
              <p className="modal-add-to-cart__text">{GUITAR_TYPE[type]}, {strings} струнная</p>
              <p className="modal-add-to-cart__price">Цена: {price} &#x20bd;</p>
            </div>
          </div>
          <div>
            <button className="modal-add-to-cart__add-button" onClick={handleClickAddButton}>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalAddToCart.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ModalAddToCart;
