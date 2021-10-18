import React, { useState } from 'react';
import kuponImage from '../../../../assets/images/kupon-image.png';
import AjbInputSearch from '../../../../components/ajb-input-search/index.component';
import AjbMarketStatus from '../../../../components/ajb-market-status/index.component';
import AjbSingleBanner from '../../../../components/ajb-single-banner/index.component';
import AjbTabsUnderline from '../../../../components/ajb-tabs-underline/index.component';
import StockWatchlist from '../../../stock-watchlist/index.feature';
import { AjaibSidebarStyled } from './index.styled';

const AjaibSidebar: React.FC = () => {
  const [tabWatchlistActive, setTabWatchlistActive] = useState<string>('saham');

  return (
    <AjaibSidebarStyled>
      <AjbSingleBanner
        url={kuponImage}
        textTag={'Ajak teman & dapatkan hadiah saham hingga Rp3 juta'}
        textButton={'Ajak Sekarang'}
      />
      <AjbInputSearch
        value={''}
        placeholder={'Cari saham atau reksa dana'}
        handleChange={(e) => console.log('OK')}
      />
      <AjbTabsUnderline
        keys={['saham', 'reksa-dana']}
        tabs={{
          'saham': {
            label: 'Saham',
            content: <StockWatchlist />
          },
          'reksa-dana': {
            label: 'Reksa Dana',
            content: (
              <p>Hello World 1</p>
            )
          }
        }}
        tabActive={tabWatchlistActive}
        handleSetActive={(_prev, next) => {
          setTabWatchlistActive(next)
        }}
      />

      <AjbMarketStatus isOpen={false} />
    </AjaibSidebarStyled>
  )
}

export default AjaibSidebar