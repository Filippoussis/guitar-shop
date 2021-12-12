const MENU_ROUTES = {
  'Каталог': 'catalog',
  'Где купить?': 'where-buy',
  'О компании': 'about',
  'Cервис-центры': 'service-centers',
};

const CATALOG_ROUTES = {
  'Акустические гитары': 'acoustic-guitars',
  'Классические гитары': 'classic-guitars',
  'Электрогитары': 'electric-guitars',
  'Бас-гитары': 'bass-guitars',
  'Укулеле': 'ukulele',
};

const INFO_ROUTES = {
  'Где купить?': 'where-buy',
  'Блог': 'blog',
  'Вопрос-ответ': 'question-answer',
  'Возврат': 'refund',
  'Сервис-центры': 'service-centers',
};

const SortDirection = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

const SortType = {
  PRICE: 'price',
  POPULAR: 'popular',
};

const GUITAR_TYPE = {
  'acoustic': {
    title: 'Aкустические гитары',
    strings: [6, 7, 12],
  },
  'electro': {
    title: 'Электрогитары',
    strings: [4, 6, 7],
  },
  'ukulele': {
    title: 'Укулеле',
    strings: [4],
  },
};

const GUITARS_STEP = 9;

const GUITAR_STRINGS = [4, 6, 7, 12];

const AppRoute = {
  ROOT: '/',
  CART: '/cart',
};

const DISCOUNT_CODES = ['GITARAHIT', 'SUPERGITARA', 'GITARA2020'];

const BreadcrumbsList = {
  CATALOG: ['Главная', 'Каталог'],
  CART: ['Главная', 'Каталог', 'Оформляем'],
};

export {
  MENU_ROUTES,
  CATALOG_ROUTES,
  INFO_ROUTES,
  SortDirection,
  SortType,
  GUITAR_TYPE,
  GUITAR_STRINGS,
  GUITARS_STEP,
  AppRoute,
  DISCOUNT_CODES,
  BreadcrumbsList,
};
