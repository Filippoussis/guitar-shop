import {createSlice} from '@reduxjs/toolkit';
import {guitarsMockData} from '../../mock/mock';

import {SortType, SortDirection, GUITARS_STEP, GUITAR_STRINGS} from '../../const';
import {sortGuitars, setPaginationTemplate} from '../../utils';

const initialState = {
  data: guitarsMockData,
  sortDirection: SortDirection.ASCENDING,
  sortType: '',
  filterTypes: [],
  filterStrings: [],
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
      state.filterTypes = action.payload;
      state.activePage = 1;
    },

    filterStringsCount: (state, action) => {
      state.filterStrings = action.payload;
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
  const disabledStrings = [];
  let checkedStrings = [];

  if (guitars.filterTypes.length !== 0) {
    result = result.filter(({type}) => guitars.filterTypes.includes(type));
    const aggregatedGuitars = result.reduce((acc, curr) => ({
      ...acc,
      [curr.strings]: (acc[curr.strings] ?? 0) + 1,
    }), {});

    const aggregatedStrings = Object.entries(aggregatedGuitars).map(([key]) => Number(key));
    GUITAR_STRINGS.forEach((item) => {
      if (!aggregatedStrings.includes(item)) {
        disabledStrings.push(item);
      }
    });
  }

  if (guitars.filterStrings.length !== 0) {
    const newResult = result.filter(({strings}) => guitars.filterStrings.includes(strings));
    result = newResult.length !== 0 ? newResult : result;

    const aggregatedGuitars = result.reduce((acc, curr) => ({
      ...acc,
      [curr.strings]: (acc[curr.strings] ?? 0) + 1,
    }), {});

    checkedStrings = Object.entries(aggregatedGuitars).map(([key]) => Number(key));
  }

  if (guitars.fromPrice !== 0) {
    result = result.filter(({price}) => price >= guitars.fromPrice);
  }

  if (guitars.toPrice !== 0) {
    result = result.filter(({price}) => price >= guitars.fromPrice && price <= guitars.toPrice);
  }

  return {
    result,
    disabledStrings,
    checkedStrings,
  };
};

const guitarsSort = (state) => {
  const {result, disabledStrings, checkedStrings} = guitarsFilter(state);
  const currentSortDirection = state.guitars.sortDirection;
  const currentSortType = state.guitars.sortType;

  return {
    guitarsList: currentSortType !== '' ? sortGuitars(result, currentSortDirection, currentSortType) : result,
    disabledStrings,
    checkedStrings,
  };
};

const selectSlice = (state) => {
  const {guitarsList, disabledStrings, checkedStrings} = guitarsSort(state);
  const pagesCount = Math.ceil(guitarsList.length / GUITARS_STEP);
  const startIndex = (state.guitars.activePage - 1) * GUITARS_STEP;
  let aggregatedPrice = {};

  if (guitarsList.length !== 0) {
    const startPrice = guitarsList[0].price;
    aggregatedPrice = guitarsList.reduce((acc, curr) => ({
      minPrice: curr.price < acc.minPrice ? curr.price : acc.minPrice,
      maxPrice: curr.price > acc.maxPrice ? curr.price : acc.maxPrice,
    }), {
      minPrice: startPrice,
      maxPrice: startPrice,
    });
  }

  return {
    guitarsSlice: guitarsList.slice(startIndex, startIndex + GUITARS_STEP),
    aggregatedPrice,
    disabledStrings,
    checkedStrings,
    pagination: {
      pagesCount,
      template: setPaginationTemplate(pagesCount, state.guitars.activePage),
    },
  };
};

const selectActivePage = (state) => state.guitars.activePage;

export const {sortType, sortDirection, filterGuitarType, filterStringsCount, setActivePage, setFromPrice, setToPrice} = guitarsSlice.actions;

export {guitarsSlice, selectSlice, selectActivePage};

export default guitarsSlice.reducer;
