import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCampersById } from './operations';

const handlePending = (state) => {
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const initialState = {
  items: [],
  current: null,
  error: null,
  page: 1,
  limit: 4,
  hasNextPage: false,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    clearItems: (state) => {
      state.items = [];
      state.showItems = [];
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const { items, total } = action.payload;

        if (state.page === 1) {
          state.items = items;
        } else {
          state.items = [...state.items, ...items];
        }
        state.total = total;
        state.hasNextPage = state.page * state.limit < total;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCampersById.pending, handlePending)
      .addCase(fetchCampersById.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(fetchCampersById.rejected, handleRejected);
  },
});

export const { setPage, clearItems } = campersSlice.actions;
export default campersSlice.reducer;
