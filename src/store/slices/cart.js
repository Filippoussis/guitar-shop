import {createSlice} from '@reduxjs/toolkit';
import {getDiscount} from '../../utils';

const initialState = {
  data: [],
  activeItem: {},
  isSuccess: false,
  promoCode: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: ({data}, action) => {
      const {id} = action.payload;
      const foundItem = data.find(({item}) => item.id === id);
      if (foundItem !== undefined) {
        const newCount = foundItem.count + 1;
        foundItem.count = newCount;
        foundItem.sum = foundItem.item.price * newCount;
        return;
      }

      data.push({
        item: action.payload,
        count: 1,
        sum: action.payload.price,
      });
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter(({item}) => item.id !== id);
    },

    decrementItem: ({data}, action) => {
      const id = action.payload;
      const foundItem = data.find(({item}) => item.id === id);
      const newCount = foundItem.count - 1;
      if (newCount >= 1) {
        foundItem.count = newCount;
        foundItem.sum = foundItem.item.price * newCount;
      }
    },

    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },

    setSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },

    setPromoCode: (state, action) => {
      state.promoCode = action.payload;
    },
  }
});

const totalCart = (state) => state.cart.data.reduce((acc, {sum}) => acc + sum, 0);

const selectSlice = (state) => state.cart.data;
const selectActiveItem = (state) => state.cart.activeItem;
const selectSuccess = (state) => state.cart.isSuccess;
const selectWithDiscount = (state) => getDiscount(totalCart(state), state.cart.promoCode);
const selectIsCartEmpty = (state) => state.cart.data.length === 0;
const selectCartItemCount = (state) => state.cart.data.length;

export {selectSlice, selectActiveItem, selectSuccess, selectWithDiscount, selectIsCartEmpty, selectCartItemCount};

export const {addItem, deleteItem, decrementItem, setActiveItem, setSuccess, setPromoCode} = cartSlice.actions;

export default cartSlice.reducer;
