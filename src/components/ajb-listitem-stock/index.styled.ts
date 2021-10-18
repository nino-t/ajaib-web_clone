import styled from 'styled-components';

export const ListheadingStock = styled.div`
  > div {
    margin: 0;
    padding-left: 16px;
    padding-right: 16px;
    height: 32px;
    background: rgb(245, 245, 245);
    display: flex;
    align-items: center;

    span {
      font-size: 12px;
      line-height: 100%;
    }
  }
`;

export const ListitemStock = styled.div`
`;

export const Card = styled.div`
  font-size: 14px;
  cursor: pointer;

  width: 100%;
  margin: 0;
  padding: 16px;
  border-bottom: 1px solid rgb(245, 245, 245);

  &:hover {
    color: rgb(58, 131, 249);
    background: rgb(58, 131, 249, 0.045);
  }

  .stockText-name {
    font-size: 12px;
  }

  .stockText-percentage {
    &.stockCondition__stay {
      color: #ADADAD;
    }

    &.stockCondition__down {
      color: #FE6D61;
    }

    &.stockCondition__up {
      color: #36B368;
    }
  }
`;