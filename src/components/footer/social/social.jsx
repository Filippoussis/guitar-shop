import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Facebook} from '../../../images/icon/facebook.svg';
import {ReactComponent as Instagram} from '../../../images/icon/instagram.svg';
import {ReactComponent as Twitter} from '../../../images/icon/twitter.svg';

import './social.scss';

function Social() {
  return (
    <div className="social">
      <Link to='#' aria-label="Facebook">
        <Facebook />
      </Link>
      <Link to='#' aria-label="Instagram">
        <Instagram />
      </Link>
      <Link to='#' aria-label="Twitter">
        <Twitter />
      </Link>
    </div>
  );
}

export default Social;
