import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import * as action from './index.action';
import { Stock } from './index.interface';

export const stocksAdapter = createEntityAdapter<Stock>()

const initialState = stocksAdapter.getInitialState()
const stocksSlice = createSlice({
  name: 'stocks',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(action.fetchStocksAction.fulfilled, stocksAdapter.upsertMany)
  },
})

export default stocksSlice.reducer