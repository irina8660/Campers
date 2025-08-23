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
        console.log(`🔻 Removed filter: ${key}`);
      } else {
        state.equipment.push(key);
        console.log(`🔺 Added filter: ${key}`);
      }

      console.log('🧾 Current filters:', [...state.equipment]);
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
