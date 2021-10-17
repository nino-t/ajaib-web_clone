import React from 'react';
import ajaibLogo from '../../../../assets/images/ajaib-logo.png';
import profileImage from '../../../../assets/images/profile-image.jpeg';
import envelopeIcon from '../../../../assets/images/envelope-icon.png';
import { AjaibHeaderStyled } from './index.styled';

const AjaibHeader: React.FC = () => {
  return (
    <AjaibHeaderStyled className="AjaibHeader">
      <div className="AjaibHeader__sections">
        <div className="AjaibHeader__section__secondary">
          <ul className="AjaibHeader__IhsgStatistic">
            <li>IHSG</li>
            <li>6.633,34</li>
            <li>0 (0%)</li>
          </ul>
        </div>
        <div className="AjaibHeader__section__primary">
          <a href="/" className="AjaibHeader__AppLogo">
            <img src={ajaibLogo} alt="Ajaib Brand" />
          </a>
          <div className="AjaibHeader__AppMenu">
            <ul className="AjaibHeader__nav">
              <li className="AjaibHeader__navItem__menu"><a href="/">Beranda</a></li>
              <li className="AjaibHeader__navItem__menu"><a href="/">Cari</a></li>
              <li className="AjaibHeader__navItem__menu"><a href="/">Portofolio</a></li>
              <li className="AjaibHeader__navItem__menu"><a href="/">Tranksaksi</a></li>
              <li className="AjaibHeader__navItem__menu"><a href="/">Berita</a></li>
              <li className="AjaibHeader__navItem__menu"><a href="/">Komunitas</a></li>
              <li className="AjaibHeader__navItem__icon">
                <a href="/">
                  <img src={envelopeIcon} alt="Envelope" />
                </a>
              </li>
              <li className="AjaibHeader__navItem__profile">
                <a href="/">
                  <img src={profileImage} alt="Profile" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AjaibHeaderStyled>
  );
}

export default AjaibHeader