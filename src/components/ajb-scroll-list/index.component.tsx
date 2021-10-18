import React from 'react';
import * as s from './index.styled';

const AjbScrollList: React.FC = ({ children }) => {
  return (
    <s.AjbScrollList>
      {children}
    </s.AjbScrollList>
  );
}

export default AjbScrollList;