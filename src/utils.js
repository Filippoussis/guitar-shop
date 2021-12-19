import {SortDirection, GUITAR_TYPE} from './const';

const sortGuitars = (items, direction, type) => {
  switch (direction) {
    case SortDirection.ASCENDING: {
      return items.slice().sort((item1, item2) => item1[type] - item2[type]);
    }
    case SortDirection.DESCENDING: {
      return items.slice().sort((item1, item2) => item2[type] - item1[type]);
    }
    default: {
      return items;
    }
  }
};

const setPaginationTemplate = (pagesCount, activePage) => {
  let templateItems = [];

  if (pagesCount <= 1) {
    return templateItems;
  }

  if (pagesCount <= 3) {
    for (let i = 1; i <= pagesCount; i++) {
      templateItems.push(i);
    }
  } else if (activePage === 1) {
    templateItems = [1, 2, '...', pagesCount];
  } else if (activePage === 2) {
    if (pagesCount === 4) {
      templateItems = [1, 2, 3, pagesCount];
    } else {
      templateItems = [1, 2, 3, '...', pagesCount];
    }
  } else if (activePage === 3) {
    if (pagesCount === 4) {
      templateItems = [1, 2, 3, pagesCount];
    } else if (pagesCount === 5) {
      templateItems = [1, 2, 3, 4, pagesCount];
    } else {
      templateItems = [1, 2, 3, 4, '...', pagesCount];
    }
  } else if (activePage === pagesCount) {
    templateItems = [1, '...', pagesCount - 1, pagesCount];
  } else if (activePage === pagesCount - 1) {
    templateItems = [1, '...', pagesCount - 2, pagesCount - 1, pagesCount];
  } else {
    templateItems = [1, '...', activePage - 1, activePage, activePage + 1, '...', pagesCount];
  }

  return templateItems;
};

const getCurrentStrings = (currentTypes) => {
  const totalStrings = [];
  currentTypes.forEach((type) => totalStrings.push(...GUITAR_TYPE[type].strings));

  return Array.from(new Set(totalStrings));
};

const getValueNumber = (value) => +value.toString().replace(/[^\d]/g, '');

const setNoBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

const setBodyScroll = () => {
  document.body.style.overflow = 'scroll';
};

const getDiscount = (total, promoCode) => {
  let result = total;
  const maxDiscount = total * 0.3;

  switch (promoCode) {
    case 'GITARAHIT': {
      result = total * 0.9;
      break;
    }
    case 'SUPERGITARA': {
      result = total - 700;
      break;
    }
    case 'GITARA2020': {
      result = 3000 > maxDiscount ? total - maxDiscount : total - 3000;
      break;
    }
    default: {
      return Math.round(result);
    }
  }

  return Math.round(result);
};

export {
  sortGuitars,
  setPaginationTemplate,
  getCurrentStrings,
  getValueNumber,
  setNoBodyScroll,
  setBodyScroll,
  getDiscount,
};
