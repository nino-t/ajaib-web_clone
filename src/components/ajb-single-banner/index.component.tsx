import React from 'react';
import * as s from './index.styled';
import * as i from './index.interface';

const AjbSingleBanner: React.FC<i.SingleBanner> = ({ url, textTag, textButton }) => {
  return (
    <s.SingleBanner>
      <div className="py-2">
        <s.Banner src={url} alt={textTag} />
      </div>
      <div className="py-2">
        <s.Tag>{textTag}</s.Tag>
        <s.Button type="button">
          {textButton}
        </s.Button>
      </div>
    </s.SingleBanner>
  )
}

export default AjbSingleBanner