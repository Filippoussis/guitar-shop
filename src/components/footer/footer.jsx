import React from 'react';

import Social from './social/social';
import About from './about/about';
import CatalogMenu from './catalog-menu/catalog-menu';
import InfoMenu from './info-menu/info-menu';
import Contacts from './contacts/contacts';
import {ReactComponent as Logo} from '../../images/logo.svg';

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
    </section>
  );
}

export default Footer;
