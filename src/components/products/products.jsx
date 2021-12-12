import React from 'react';
import {useSelector} from 'react-redux';

import Product from './product/product';
import Pagination from './pagination/pagination';
import ModalAddToCart from './modal-add-to-cart/modal-add-to-cart';
import ModalSuccess from './modal-success/modal-success';

import {selectSlice} from '../../store/slices/guitars';
import {selectActiveItem, selectSuccess} from '../../store/slices/cart';

import './products.scss';

function Products() {

  const activeItem = useSelector(selectActiveItem);
  const isSuccess = useSelector(selectSuccess);

  const {guitarsSlice, pagination: {pagesCount, template}} = useSelector(selectSlice);
  const items = guitarsSlice.map((item) => <li key={item.id}><Product item={item} /></li>);

  return (
    <div className="products">
      <ul className="products__list">
        {items}
      </ul>
      <div className="products__pagination">
        <Pagination pagesCount={pagesCount} paginationTemplate={template} />
      </div>
      {Object.keys(activeItem).length !== 0 && <ModalAddToCart item={activeItem} />}
      {isSuccess && <ModalSuccess />}
    </div>
  );
}

export default Products;
