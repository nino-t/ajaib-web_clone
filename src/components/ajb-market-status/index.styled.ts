import styled from 'styled-components';

export const MarketStatus = styled.div`
  z-index: 99;
  padding: 8px;
  text-align-last: center;
  background-color: rgb(5, 56, 137); 

  > img {
    width: 24px;
    margin-right: 4px;
  }

  > span {
    color: white;
    font-weight: bold;
    font-size: 13px;
  }
`;