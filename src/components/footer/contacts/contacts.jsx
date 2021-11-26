import React from 'react';

import {ReactComponent as PhoneIcon} from '../../../images/icon/phone.svg';
import {ReactComponent as ClockIcon} from '../../../images/icon/clock.svg';

import './contacts.scss';

function Contacts() {
  return (
    <div className="contacts">
      <h4>Контакты</h4>
      <address>г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</address>
      <a className="contacts__tel" href="tel:88125005050">
        <PhoneIcon className="contacts__phone-icon" />
        8-812-500-50-50
      </a>
      <p className="contacts__regime">
        Режим работы:
        <span className="contacts__clock"><ClockIcon className="contacts__clock-icon" />с 11:00 до 20:00,</span>
        без выходных.
      </p>
    </div>
  );
}

export default Contacts;
