import styled from 'styled-components';

export const AjaibLayoutStyled = styled.div`
  > .AjaibLayout__body { 
    > .AjaibLayout__content {
      overflow-x: auto;
      position: fixed;
      top: 42px;
      left: 336px;
      height: calc(100vh - 42px);
      width: calc(100% - 336px);
    }
  }
`;