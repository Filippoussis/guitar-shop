import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import PageItem from './page-item/page-item';

import {selectActivePage, setActivePage} from '../../../store/slices/guitars';

import './pagination.scss';

function Pagination ({pagesCount, paginationTemplate}) {

  const dispatch = useDispatch();
  const activePage = useSelector(selectActivePage);

  const items = paginationTemplate.map((item, index) => <li key={`pag-${index + 1}`} className="pagination__item"><PageItem item={item}/></li>)

  return (
    <div className="pagination">
      {pagesCount !== 0 && activePage !== 1 && <button className="pagination__button pagination__button--back" onClick={() => dispatch(setActivePage(activePage - 1))}>Назад</button>}
      <ul className="pagination__list">{items}</ul>
      {pagesCount !== 0 && activePage !== pagesCount && <button className="pagination__button pagination__button--forward" onClick={() => dispatch(setActivePage(activePage + 1))}>Далее</button>}
    </div>
  );
}

Pagination.propTypes = {
  paginationTemplate: PropTypes.array.isRequired,
};

export default Pagination;
