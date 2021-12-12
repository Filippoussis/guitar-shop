import React from 'react';
import {Link} from 'react-router-dom';

import SiteMenu from './site-menu/site-menu';
import UserMenu from './user-menu/user-menu';

import {ReactComponent as Logo} from '../../images/logo.svg';

import {AppRoute} from '../../const';

import './header.scss';

function Header() {
  return (
    <section className="header">
      <div className="header__wrapper">
        <Link to={AppRoute.ROOT} aria-label="Logo Guitar Shop">
          <Logo style={{color: 'black'}} />
        </Link>
        <SiteMenu />
        <UserMenu />
      </div>
    </section>
  );
}

export default Header;
