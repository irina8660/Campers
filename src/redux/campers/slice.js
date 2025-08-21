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
  showItems: [],
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
    setShowItems: (state) => {
      state.showItems = state.items.slice(0, state.page * state.limit);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCampersById.pending, handlePending)
      .addCase(fetchCampersById.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(fetchCampersById.rejected, handleRejected);
  },
});

export const { setPage, clearItems, setShowItems } = campersSlice.actions;
export default campersSlice.reducer;
