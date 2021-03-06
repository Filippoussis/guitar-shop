import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterGuitarType, filterStringsCount, setFromPrice, setToPrice, selectSlice} from '../../store/slices/guitars';

import {getValueNumber} from '../../utils';
import {GUITAR_TYPE, GUITAR_STRINGS} from '../../const';

import './filter.scss';

function Filter() {

  const dispatch = useDispatch();
  const {aggregatedPrice: {minPrice = '', maxPrice = ''}, disabledStrings, checkedStrings} = useSelector(selectSlice);

  const [fromPrice, setFromPriceState] = useState('');
  const [toPrice, setToPriceState] = useState('');

  const [typeState, setTypeState]  = useState({
    'acoustic': false,
    'electro': false,
    'ukulele': false,
  });

  const [stringsState, setStringsState] = useState({
    '4': false,
    '6': false,
    '7': false,
    '12': false,
  });

  useEffect(() => {
    if (fromPrice !== '') {
      dispatch(setFromPrice(fromPrice));
    }
  }, [fromPrice, minPrice, maxPrice, dispatch]);

  useEffect(() => {
    if (toPrice !== '') {
      dispatch(setToPrice(toPrice));
    }
  }, [toPrice, minPrice, maxPrice, dispatch]);

  useEffect(() => {
    const data = Object.entries(typeState).filter(([_, value]) => value === true).map(([key]) => key);
    dispatch(filterGuitarType(data));
  }, [typeState, dispatch]);

  useEffect(() => {
    const data = Object.entries(stringsState).filter(([_, value]) => value === true).map(([key]) => Number(key));
    dispatch(filterStringsCount(data));
  }, [stringsState, dispatch]);

  const handleChangeFromPrice = (evt) => {
    const newFromPrice = getValueNumber(evt.target.value);
    setFromPriceState(newFromPrice);
  };

  const handleBlurFromPrice = () => {
    if (fromPrice > toPrice && toPrice !== '') {
      setFromPriceState(toPrice);
    }
  };

  const handleChangeToPrice = (evt) => {
    const newToPrice = getValueNumber(evt.target.value);
    setToPriceState(newToPrice);
  };

  const handleBlurToPrice = () => {
    if (toPrice < fromPrice && fromPrice !== '') {
      setToPriceState(fromPrice);
    }
  };

  const handleChangeGuitarType = (evt) => {
    setTypeState((state) => ({
      ...state,
      [evt.target.name]: evt.target.checked,
    }));
  };

  const handleChangeStringsCount = (evt) => {
    setStringsState((state) => ({
      ...state,
      [evt.target.name]: evt.target.checked,
    }));
  };

  return (
    <section className="guitars-filter">
      <h3>????????????</h3>
      <div className="guitar-price">
        <p className="guitar-price__legend">????????, &#x20bd;</p>
        <div className="guitar-price__controls">
          <label htmlFor="min-price">
            <input
              className="guitar-price__input" type="text"
              id="min-price"
              placeholder={minPrice.toLocaleString()}
              value={fromPrice}
              onChange={handleChangeFromPrice}
              onBlur={handleBlurFromPrice}
            />
          </label>
          <label htmlFor="max-price">
            <input
              className="guitar-price__input" type="text"
              id="max-price"
              placeholder={maxPrice.toLocaleString()}
              value={toPrice}
              onChange={handleChangeToPrice}
              onBlur={handleBlurToPrice}
            />
          </label>
        </div>
      </div>
      <div className="guitar-type">
        <p className="guitar-type__legend">?????? ??????????</p>
        <div className="guitar-type__controls">
          {
            Object.entries(GUITAR_TYPE).map(([key, {title}]) => (
              <label key={key} htmlFor={key}>
                <input
                  className="guitar-type__input visually-hidden"
                  type="checkbox" id={key} name={key} onChange={handleChangeGuitarType}
                />
                <span className="guitar-type__checkbox"></span>
                <span className="guitar-type__label">{title}</span>
              </label>
            ))
          }
        </div>
      </div>
      <div className="guitar-strings">
        <p className="guitar-strings__legend">???????????????????? ??????????</p>
        <div className="guitar-strings__controls">
          {
            GUITAR_STRINGS.map((item) => {

              const isDisabled = disabledStrings.includes(item);
              const isChecked = checkedStrings.includes(item);

              return (
                <label key={item} htmlFor={item}>
                  <input
                    className="guitar-strings__input visually-hidden"
                    type="checkbox" id={item} name={item} onChange={handleChangeStringsCount}
                    disabled={isDisabled}
                    checked={isChecked}
                  />
                  <span className="guitar-strings__checkbox"></span>
                  <span className="guitar-strings__label">{item}</span>
                </label>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Filter;
