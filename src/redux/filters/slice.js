import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',
  equipment: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    toggleEquipment: (state, action) => {
      const key = action.payload;
      if (state.equipment.includes(key)) {
        state.equipment = state.equipment.filter((item) => item !== key);
      } else {
        state.equipment.push(key);
      }
    },
    resetFilters: (state) => {
      state.location = '';
      state.form = '';
      state.equipment = [];
    },
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setLocation,
  setForm,
  toggleEquipment,
  resetFilters,
  setFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
