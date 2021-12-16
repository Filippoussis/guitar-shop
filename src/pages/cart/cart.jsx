import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';

import CartItemList from '../../components/cart-item-list/cart-item-list';
import CartFooter from '../../components/cart-footer/cart-footer';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

import {selectIsCartEmpty} from '../../store/slices/cart';
import {BreadcrumbsList, AppRoute} from '../../const';

function Cart() {

  const isCartEmpty = useSelector(selectIsCartEmpty);

  return (
    <div className="page-container">
      <Header />
      <main className="main">
        <Banner />
        <div className="main__wrapper main__wrapper--cart">
          <div className="main__inner">
            <h2 className="main__title">Корзина</h2>
            <Breadcrumbs list={BreadcrumbsList.CART} className="breadcrumbs breadcrumbs--cart" />
            <div className="main__content main__content--cart">
              <CartItemList />
              {!isCartEmpty && <CartFooter />}
              {isCartEmpty && <p>Пожалуйста, выберите понравившиеся товары из <Link to={AppRoute.ROOT}>каталога</Link></p>}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
