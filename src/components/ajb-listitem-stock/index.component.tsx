import React from 'react';
import * as s from './index.styled';
import * as i from './index.interface';

const AjbListitemStock: React.FC<i.ListitemStock> = (props) => {
  const getStockCondition = (changeNumber: number): string => {
    if (changeNumber === 0) {
      return 'stay';
    } else if (changeNumber < 0) {
      return 'down';
    }
    return 'up';
  }

  const renderPercentage = (decimal: number): string => {
    let prefix = '';
    if (decimal > 0) {
      prefix = '+';
    }

    const decimalString = decimal.toFixed(2).toString().replace(".", ",");
    return prefix + decimalString + '%';
  }

  const stockCondition = getStockCondition(props.stockChangeNumber);
  return (
    <s.ListitemStock className="position-relative">
      <s.Card className="row">
        <div className="col-6 p-0">
          <span className="d-block stockText-code">{props.stockCode}</span>
          <span className="d-block stockText-name">{props.stockName}</span>
        </div>
        <div className="d-flex align-items-center justify-content-end p-0 col-2">
        <span className="d-block stockText-price">{props.stockPrice}</span>
        </div>
        <div className="d-flex align-items-center justify-content-end p-0 col-4">
          <span className={`d-block stockText-percentage stockCondition__${stockCondition}`}>{props.stockChangeNumber} ({renderPercentage(props.stockChangePercentage)})</span>
        </div>
      </s.Card>
    </s.ListitemStock>
  );
}

export default AjbListitemStock;