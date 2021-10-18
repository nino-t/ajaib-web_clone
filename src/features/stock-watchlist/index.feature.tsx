import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocksAction } from '../../app/stocks/index.action';
import { selectAllStocks } from '../../app/stocks/index.selector';
import AjbListheadingStock from '../../components/ajb-listitem-stock/heading.component';
import AjbListitemStock from '../../components/ajb-listitem-stock/index.component';
import { AjbScrollList } from '../../components/ajb-scroll-list/index.styled';
import * as s from './index.styled';

const StockWatchlist: React.FC = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStocksAction())
  }, [dispatch]);

  const stocks = useSelector(selectAllStocks);
  return (
    <s.StockWatchlist>
      <div className="StockWatchlist">
        <div className="StockWatchlist__heading px-4 py-2 pt-3">
          <h3>Watchlist : Watchlist Saya</h3>
        </div>
        <div className="StockWatchlist__body">
          <AjbScrollList>
            <AjbListheadingStock />
            {
              stocks.map((stock, index) => (
                <AjbListitemStock
                  key={index}
                  stockCode={stock.id}
                  stockName={stock.title}
                  stockPrice={stock.price}
                  stockChangeNumber={stock.changeNumber}
                  stockChangePercentage={stock.changePercentage}
                />
              ))
            }
          </AjbScrollList>
        </div>
      </div>
    </s.StockWatchlist>
  );
}

export default StockWatchlist;