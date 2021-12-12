import React from 'react';

import Social from './social/social';
import About from './about/about';
import CatalogMenu from './catalog-menu/catalog-menu';
import InfoMenu from './info-menu/info-menu';
import Contacts from './contacts/contacts';

import {ReactComponent as Logo} from '../../images/logo.svg';
import bigGuitar1xWebp from '../../images/design/big-guitar1x.webp';
import bigGuitar2xWebp from '../../images/design/big-guitar2x.webp';

import './footer.scss';

function Footer() {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__col footer__col--left">
          <Logo style={{color: 'white'}}/>
          <Social />
        </div>
        <div className="footer__col footer__col--right">
          <About />
          <CatalogMenu />
          <InfoMenu />
          <Contacts />
        </div>
      </div>
      <img
        className="footer__image"
        src={bigGuitar1xWebp}
        srcSet={bigGuitar2xWebp}
        alt="Изображение стратокастера"
        width="828"
        height="282"
      >
      </img>
    </section>
  );
}

export default Footer;
