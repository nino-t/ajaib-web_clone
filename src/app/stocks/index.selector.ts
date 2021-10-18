import { RootState } from '../store';
import { stocksAdapter } from './index.reducer';

export const {
  selectById: selectStockById,
  selectIds: selectStockIds,
  selectEntities: selectStockEntities,
  selectAll: selectAllStocks,
  selectTotal: selectTotalStocks,
} = stocksAdapter.getSelectors((state: RootState) => state.stocks)
