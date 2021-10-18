import React from 'react';
import * as s from './index.styled';
import marketStatusIcon from '../../assets/images/market-status-icon.png';

const AjbMarketStatus: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  if (isOpen) {
    return null
  }

  const text = 'Sedang berada di luar jam kerja bursa';
  return (
    <s.MarketStatus className="d-flex justify-content-center align-items-center" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '336px' }}>
      <img src={marketStatusIcon} alt={text} />
      <span>{text}</span>
    </s.MarketStatus>
  )
}

export default AjbMarketStatus;