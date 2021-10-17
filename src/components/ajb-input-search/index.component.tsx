import React from 'react';
import * as s from './index.styled';
import * as i from './index.interface';
import searchIcon from '../../assets/images/search-icon.png';

const AjbInputSearch: React.FC<i.InputSearch> = ({ value, placeholder, handleChange }) => {
  return (
    <s.InputSearch>
      <div className="InputSearch__field">
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <div>
          <img src={searchIcon} alt="Search" />
        </div>
      </div>
    </s.InputSearch>
  )
}

export default AjbInputSearch