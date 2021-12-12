import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Main from '../pages/main/main';
import Cart from '../pages/cart/cart';
import NotFound from '../pages/not-found/not-found';

import {AppRoute} from '../const';
import './app.scss';

function App() {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<Main />} exact />
      <Route path={AppRoute.CART} element={<Cart />} exact />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
