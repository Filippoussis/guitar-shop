import React from 'react';

import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Filter from '../../components/filter/filter';
import Sort from '../../components/sort/sort';
import Products from '../../components/products/products';
import Footer from '../../components/footer/footer';

import {BreadcrumbsList} from '../../const';

function Main() {
  return (
    <div className="page-container">
      <Header />
      <main className="main">
        <Banner />
        <div className="main__wrapper">
          <div className="main__inner">
            <h2 className="main__title">Каталог гитар</h2>
            <Breadcrumbs list={BreadcrumbsList.CATALOG} />
            <div className="main__content">
              <Filter />
              <Sort />
              <Products />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
