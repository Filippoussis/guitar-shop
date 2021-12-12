import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ReactComponent as CloseButton} from '../../../images/icon/close.svg';

import {setSuccess} from '../../../store/slices/cart';

import {setBodyScroll} from '../../../utils';
import {AppRoute} from '../../../const';

import './modal-success.scss';

function ModalSuccess() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickGoToCart = () => {
    dispatch(setSuccess(false));
    navigate(AppRoute.CART);
  }

  const handleClickClose = () => {
    setBodyScroll();
    dispatch(setSuccess(false));
  };

  return (
    <div className="modal-success" onClick={handleClickClose}>
      <div className="modal-success__content" onClick={(evt) => evt.stopPropagation()}>
        <button className="modal-success__close" onClick={handleClickClose} aria-label="Кнопка Закрыть">
          <CloseButton />
        </button>
        <p className="modal-success__title">Товар успешно добавлен в корзину</p>
        <div className="modal-success__controls">
          <button onClick={handleClickGoToCart} className="modal-success__link-goto-cart">Перейти в корзину</button>
          <button onClick={handleClickClose} className="modal-success__button-continue">Продолжить покупки</button>
        </div>
      </div>
    </div>
  );
}

export default ModalSuccess;