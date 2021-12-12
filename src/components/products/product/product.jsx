import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import Stars from '../../stars/stars';

import {setActiveItem} from '../../../store/slices/cart';

import {ReactComponent as BasketIcon} from '../../../images/icon/basket.svg';

import {setNoBodyScroll} from '../../../utils';

import './product.scss';

function Product({item}) {

  const dispatch = useDispatch();
  const {title, popular, price, smallImage, bigImage} = item;

  const handleClickButton = () => {
    dispatch(setActiveItem(item));
    setNoBodyScroll();
  };

  return (
    <article className="product">
      <div className="product__picture">
        <img
          src={`./assets/images/${smallImage}`}
          srcSet={`./assets/images/${bigImage}`}
          alt={title}
          width="68"
          height="190"
        >
        </img>
      </div>
      <div className="product__popular">
        <Stars />
        <span>{popular}</span>
      </div>
      <div className="product__heading">
        <h3>{title}</h3>
        <span className="product__price">{price.toLocaleString()} &#x20bd;</span>
      </div>
      <div className="product__controls">
        <Link to="#" className="product__link product__link--detailed">Подробнее</Link>
        <Link to="#" className="product__link product__link--buy" onClick={handleClickButton}>
          <BasketIcon className="product__basket-icon" />
          Купить
        </Link>
      </div>
    </article>
  );
}

Product.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Product;
