import React from 'react';
import * as s from './index.styled';

const AjbMyInvestment: React.FC = () => {
  return (
    <s.MyInvestment className="d-flex justify-content-between px-4 py-3">
      <div>
        <s.Label size={'small'}>Total Investasi</s.Label>
        <s.Amount>Rp 34.721.500</s.Amount>
      </div>
      <div>
        <s.Label size={'small'}>Total Return</s.Label>
        <s.Amount>+Rp 4.905.900 (+24,59%)</s.Amount>
      </div>
      <div>
        <s.Label size={'normal'}>Buying Power Rp 31.975</s.Label>
      </div>
    </s.MyInvestment>
  );
}

export default AjbMyInvestment;