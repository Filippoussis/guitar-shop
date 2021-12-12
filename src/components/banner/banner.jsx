import React from 'react';

import bigGuitar1xWebp from '../../images/design/big-guitar1x.webp';
import bigGuitar2xWebp from '../../images/design/big-guitar2x.webp';

import './banner.scss';

function Banner() {
  return (
    <div className="banner">
      <img
        className="banner__image"
        src={bigGuitar1xWebp}
        srcSet={bigGuitar2xWebp}
        alt="Изображение стратокастера"
        width="828"
        height="282"
      >
      </img>
    </div>
  );
}

export default Banner;
