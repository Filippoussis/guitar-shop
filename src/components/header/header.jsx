import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import SiteMenu from './site-menu/site-menu';
import UserMenu from './user-menu/user-menu';

import {ReactComponent as Logo} from '../../images/logo.svg';

import {AppRoute} from '../../const';

import './header.scss';

function Header() {

  const location = useLocation();
  const currentPathname = location.pathname;

  return (
    <section className="header">
      <div className="header__wrapper">
        {
          currentPathname !== AppRoute.ROOT
            ?
              <Link to={AppRoute.ROOT} aria-label="Logo Guitar Shop" className="header__logo-link">
                <Logo style={{color: 'black'}} />
              </Link>
            : <Logo style={{color: 'black'}} />
        }
        <SiteMenu />
        <UserMenu />
      </div>
    </section>
  );
}

export default Header;
