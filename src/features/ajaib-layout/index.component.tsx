import React from 'react';
import AjaibHeader from './components/ajaib-header/index.component';
import AjaibSidebar from './components/ajaib-sidebar/index.component';
import { AjaibLayoutStyled } from './index.styled';

const AjaibLayout: React.FC = (props) => {
  return (
    <AjaibLayoutStyled className="AjaibLayout">
      <AjaibHeader />
      <div className="AjaibLayout__body">
        <AjaibSidebar />
        <div className="AjaibLayout__content">
          {props.children}
        </div>
      </div>
    </AjaibLayoutStyled>
  );
}

export default AjaibLayout;