import React from 'react';
import {useDispatch} from 'react-redux';
import {sortType, sortDirection} from '../../store/slices/guitars';

import {SortType, SortDirection} from '../../const';

import {ReactComponent as ArrowUp} from '../../images/icon/arrow-up.svg';
import {ReactComponent as ArrowDown} from '../../images/icon/arrow-down.svg';

import './sort.scss';

function Sort() {

  const dispatch = useDispatch();

  return (
    <div className="sort">
      Сортировать:
      <div className="sort__wrapper">
        <div className="sort__type">
          <label htmlFor="price">
            <input className="sort__type-input visually-hidden" type="radio" id="price" name="sort-type" onChange={() => dispatch(sortType(SortType.PRICE))} />
            <span className="sort__type-label">по цене</span>
          </label>
          <label htmlFor="popular">
            <input className="sort__type-input visually-hidden" type="radio" id="popular" name="sort-type" onChange={() => dispatch(sortType(SortType.POPULAR))} />
            <span className="sort__type-label">по популярности</span>
          </label>
        </div>
        <div className="sort__arrow">
          <label htmlFor="arrow-up">
            <input className="sort__arrow-input visually-hidden" type="radio" id="arrow-up" name="sort-arrow" onChange={() => dispatch(sortDirection(SortDirection.ASCENDING))} />
            <span className="sort__arrow-label"><ArrowUp /></span>
          </label>
          <label htmlFor="arrow-down">
            <input className="sort__arrow-input visually-hidden" type="radio" id="arrow-down" name="sort-arrow" onChange={() => dispatch(sortDirection(SortDirection.DESCENDING))} />
            <span className="sort__arrow-label"><ArrowDown /></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Sort;
