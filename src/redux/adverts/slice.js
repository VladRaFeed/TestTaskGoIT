import { createSlice } from '@reduxjs/toolkit';
import { getAll } from './operations';

const initialState = {
  modal: null,
  favorites: [],
  pagesEndReached: false,
  brands: [],
  adverts: [],
  isLoading: false,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    //Since Mockapi.io does not allow multiple results to be returned in response to a query with an array of id's, it is necessary to store entire adverts. In the real API to ensure data consistency when ads may change over time, only the advert id's can be stored here
    toggleFavorite(state, { payload }) {
      const existingIndex = state.favorites.findIndex(
        ad => ad.id === payload.id
      );
      if (existingIndex !== -1) {
        state.favorites.splice(existingIndex, 1);
        return;
      }
      state.favorites = [...state.favorites, payload];
    },
    openModal(state, { payload }) {
      state.modal = payload;
    },
    closeModal(state) {
      state.modal = null;
    },
    emptyAdverts(state) {
      state.adverts = [];
      state.pagesEndReached = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.adverts = [...state.adverts, ...payload];
        if (payload.length < 12) {
          state.pagesEndReached = true;
        }
        state.isLoading = false;
      })
      .addCase(getAll.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAll.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const { toggleFavorite, openModal, closeModal, emptyAdverts } =
  advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
