import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';

import InvalidMessage from './invalid-message/invalid-message';

import {setPromoCode} from '../../../store/slices/cart';
import {DISCOUNT_CODES} from '../../../const';

import './discount.scss';

function Discount() {

  const dispatch = useDispatch();
  const inputField = useRef(null);

  const [isValidCode, setStateCode] = useState(true);

  const handleInputFocus = () => {
    if (!isValidCode) {
      setStateCode(true);
    }
  }

  const handleButtonClick = () => {
    const inputValue = inputField.current.value.trim();
    if (!DISCOUNT_CODES.includes(inputValue)) {
      setStateCode(false);
      return;
    }

    dispatch(setPromoCode(inputValue));
  };

  return (
    <div className="discount">
      <p className="discount__title">Промокод на скидку</p>
      <p className="discount__text">Введите свой промокод, если он у вас есть.</p>
      <div className="discount__controls">
        <input
          className="discount__controls__input"
          type="text"
          ref={inputField}
          onFocus={handleInputFocus}
        />
        <button
          className="discount__controls__button" onClick={handleButtonClick}>Применить купон</button>
      </div>
      {!isValidCode && <InvalidMessage />}
    </div>
  );
}

export default Discount;
