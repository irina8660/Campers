import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosInstance';
import { toast } from 'react-hot-toast';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ filters = {}, page = 1, limit = 4 }, thunkAPI) => {
    try {
      const params = new URLSearchParams();

      if (filters.location) params.append('location', filters.location);
      if (filters.form) params.append('form', filters.form);
      if (filters.transmission)
        params.append('transmission', filters.transmission);

      Object.entries(filters).forEach(([key, value]) => {
        if (
          !['location', 'form', 'transmission'].includes(key) &&
          value === true
        ) {
          params.append(key, 'true');
        }
      });

      params.append('page', page);
      params.append('limit', limit);

      const query = params.toString();
      const { data } = await axios.get(`/campers?${query}`);
      return {
        items: data.items,
        total: data.total,
        page,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);
      return data;
    } catch (error) {
      toast.error('Failed to load camper');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
