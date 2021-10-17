import styled from 'styled-components';

export const AjaibSidebarStyled = styled.div`
  padding: 0;
  width: 336px;
  height: calc(100vh - 42px);
  position: fixed;
  z-index: 98;
  top: 42px;
  left: 0;
  box-shadow: rgb(51 51 51 / 8%) 0px 2px 8px 0px;
`;

export const AjbMarketStatusStyled = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: rgb(5, 56, 137);
  padding: 8px;
  text-align-last: center;
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  width: 336px;
  z-index: 99;

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