import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterGuitarType, filterStringsCount, setFromPrice, setToPrice, selectSlice} from '../../store/slices/guitars';

import {getCurrentStrings, getValueNumber} from '../../utils';
import {GUITAR_TYPE, GUITAR_STRINGS} from '../../const';

import './filter.scss';

function Filter() {

  const dispatch = useDispatch();
  const {aggregatedPrice: {minPrice = '', maxPrice = ''}} = useSelector(selectSlice);

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
    setTypeState((state) => {
      return {
        ...state,
        [evt.target.name]: evt.target.checked,
      };
    });
  }

  const handleChangeStringsCount = (evt) => {
    setStringsState((state) => {
      return {
        ...state,
        [evt.target.name]: evt.target.checked,
      }
    });
  };

  const currentTypes = Object.entries(typeState).filter(([_, value]) => value === true).map(([key]) => key);
  const currentStrings = getCurrentStrings(currentTypes);

  return (
    <section className="guitars-filter">
      <h3>Фильтр</h3>
      <div className="guitar-price">
        <p className="guitar-price__legend">Цена, &#x20bd;</p>
        <div className="guitar-price__controls">
          <input
            className="guitar-price__input" type="text"
            placeholder={minPrice.toLocaleString()}
            value={fromPrice}
            onChange={handleChangeFromPrice}
            onBlur={handleBlurFromPrice}
          />
          <input
            className="guitar-price__input" type="text"
            placeholder={maxPrice.toLocaleString()}
            value={toPrice}
            onChange={handleChangeToPrice}
            onBlur={handleBlurToPrice}
          />
        </div>
      </div>
      <div className="guitar-type">
        <p className="guitar-type__legend">Тип гитар</p>
        <div className="guitar-type__controls">
        {
          Object.entries(GUITAR_TYPE).map(([key, {title}]) => {
            return (
              <label key={key} htmlFor={key}>
                <input
                  className="guitar-type__input visually-hidden"
                  type="checkbox" id={key} name={key} onChange={handleChangeGuitarType}
                />
                <span className="guitar-type__checkbox"></span>
                <span className="guitar-type__label">{title}</span>
              </label>
            );
          })
        }
        </div>
      </div>
      <div className="guitar-strings">
        <p className="guitar-strings__legend">Количество струн</p>
        <div className="guitar-strings__controls">
          {
            GUITAR_STRINGS.map((item) => {

              const isDisabled = !currentStrings.includes(item);

              return (
                <label key={item} htmlFor={item}>
                  <input
                    className="guitar-strings__input visually-hidden"
                    type="checkbox" id={item} name={item} onChange={handleChangeStringsCount}
                    disabled={isDisabled}
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
