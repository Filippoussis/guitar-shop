import React from 'react';
import SiteMenu from './site-menu/site-menu';
import UserMenu from './user-menu/user-menu';
import {ReactComponent as Logo} from '../../images/logo.svg';

import './header.scss';

function Header() {
  return (
    <section className="header">
      <div className="header__wrapper">
        <Logo style={{color: 'black'}} />
        <SiteMenu />
        <UserMenu />
      </div>
    </section>
  );
}

export default Header;
