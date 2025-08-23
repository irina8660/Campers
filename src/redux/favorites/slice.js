import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const id = action.payload;
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((favId) => favId !== id);
        console.log('🔻 Removed from favorites:', id);
      } else {
        state.ids.push(id);
        console.log('🔺 Added to favorites:', id);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
