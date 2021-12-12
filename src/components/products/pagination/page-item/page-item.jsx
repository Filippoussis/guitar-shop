import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectActivePage, setActivePage} from '../../../../store/slices/guitars';

import './page-item.scss';

function PageItem({item}) {

  const dispatch = useDispatch();
  const activePage = useSelector(selectActivePage);

  const handleClick = (pageValue) => {
    if (pageValue !== '...') {
      dispatch(setActivePage(pageValue));
    }
  }

  const activeClassMod = item === activePage ? 'page-item--active' : '';

  return (
    <button className={`page-item ${activeClassMod}`} onClick={() => handleClick(item)}>{item}</button>
  );
}

export default PageItem;
