import React from 'react';
import { ListheadingStock } from './index.styled';

const AjbListheadingStock: React.FC = () => {
  return (
    <ListheadingStock>
      <div className="row no-gutters">
        <div className="d-flex align-items-center p-0 col-6">
          <span>Kode Saham</span>
        </div>
        <div className="d-flex align-items-center justify-content-end p-0 col-2">
          <span>Harga</span>
        </div>
        <div className="d-flex align-items-center justify-content-end p-0 col-4">
          <span>Change</span>
        </div>
      </div>
    </ListheadingStock>
  );
}

export default AjbListheadingStock;