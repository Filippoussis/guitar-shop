import {createSlice} from '@reduxjs/toolkit';
import {guitarsMockData} from '../../mock/mock';

import {SortType, SortDirection, GUITARS_STEP} from '../../const';
import {sortGuitars, setPaginationTemplate} from '../../utils';

const initialState = {
  data: guitarsMockData,
  filtered: [],
  sortDirection: SortDirection.ASCENDING,
  sortType: '',
  types: [],
  strings: [],
  activePage: 1,
  fromPrice: 0,
  toPrice: 0,
};

const guitarsSlice = createSlice({
  name: 'guitars',
  initialState,
  reducers: {
    sortType: (state, action) => {
      state.sortType = action.payload;
    },

    sortDirection: (state, action) => {
      if (state.sortType === '') {
        state.sortType = SortType.PRICE;
      }
      state.sortDirection = action.payload;
    },

    filterGuitarType: (state, action) => {
      state.types = action.payload;
      state.activePage = 1;
    },

    filterStringsCount: (state, action) => {
      state.strings = action.payload;
      state.activePage = 1;
    },

    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },

    setFromPrice: (state, action) => {
      state.fromPrice = action.payload;
    },

    setToPrice: (state, action) => {
      state.toPrice = action.payload;
    },
  },
});

const guitarsFilter = ({guitars}) => {
  let result = guitars.data;


  if (guitars.types.length !== 0) {
    result = result.filter(({type}) => guitars.types.includes(type));
  }

  if (guitars.strings.length !== 0) {
    result = result.filter(({strings}) => guitars.strings.includes(strings));
  }

  if (guitars.fromPrice !== 0) {
    result = result.filter(({price}) => price >= guitars.fromPrice);
  }

  if (guitars.toPrice !== 0) {
    result = result.filter(({price}) => price >= guitars.fromPrice && price <= guitars.toPrice);
  }

  return result;
}

const guitarsSort = (state) => {
  const filteredGuitars = guitarsFilter(state);
  const sortDirection = state.guitars.sortDirection;
  const sortType = state.guitars.sortType;

  return sortType !== '' ? sortGuitars(filteredGuitars, sortDirection, sortType) : filteredGuitars;
}

const selectSlice = (state) => {
  const guitarsList = guitarsSort(state);
  const pagesCount = Math.ceil(guitarsList.length / GUITARS_STEP);
  const startIndex = (state.guitars.activePage - 1) * GUITARS_STEP;
  let aggregatedPrice = {};

  if (guitarsList.length !== 0) {
    const startPrice = guitarsList[0].price;
    aggregatedPrice = guitarsList.reduce((acc, curr) => {
      return {
        minPrice: curr.price < acc.minPrice ? curr.price : acc.minPrice,
        maxPrice: curr.price > acc.maxPrice ? curr.price : acc.maxPrice,
      }
    }, {
        minPrice: startPrice,
        maxPrice: startPrice,
    });
  }

  return {
    guitarsSlice: guitarsList.slice(startIndex, startIndex + GUITARS_STEP),
    aggregatedPrice,
    pagination: {
      pagesCount,
      template: setPaginationTemplate(pagesCount, state.guitars.activePage),
    },
  }
};

const selectActivePage = (state) => state.guitars.activePage;

export const {sortType, sortDirection, filterGuitarType, filterStringsCount, setActivePage, setFromPrice, setToPrice} = guitarsSlice.actions;

export {guitarsSlice, selectSlice, selectActivePage};

export default guitarsSlice.reducer;
