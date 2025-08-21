import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosInstance';
import { toast } from 'react-hot-toast';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/campers');
      return data;
    } catch (error) {
      toast.error('Failed to load campers');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchCampersById = createAsyncThunk(
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
