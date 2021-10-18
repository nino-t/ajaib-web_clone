import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './index.api';

export const fetchStocksAction = createAsyncThunk(
  `stocks/fetchStocks`,
  async () => {
    const response = await api.fetchStocks()
    return response.data
  }
)
