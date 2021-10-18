import styled from 'styled-components';

export const StockWatchlist = styled.div`
  > .StockWatchlist {
    > .StockWatchlist__heading {
      h3 {
        font-size: 17px;
        font-weight: bold;
        line-height: 100%;
      }
    }

    > .StockWatchlist__body {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: calc((((((100vh - 24px) - 56px) - 56px) - 16px) - 40px) - 180px);
    }
  }
`;