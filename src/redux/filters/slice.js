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
      const option = action.payload;
      if (state.equipment.includes(option)) {
        state.equipment = state.equipment.filter((item) => item !== option);
      } else {
        state.equipment.push(option);
      }
    },
    resetFilters: (state) => {
      state.location = '';
      state.form = '';
      state.equipment = [];
    },
  },
});

export const { setLocation, setForm, toggleEquipment, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
