import styled from 'styled-components';

export const MyInvestment = styled.div`
  height: 112px;
  padding: 10px 24px 16px;
  color: rgb(255, 255, 255);
  background-image: linear-gradient(to right, rgb(137, 181, 251), rgb(8, 88, 217));
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
`;

export const Label = styled.span<{ size: 'small' | 'normal' }>`
  display: block;
  font-size: ${(props) => props.size === 'small' ? '12px': '14px'};
  line-height: ${(props) => props.size === 'small' ? '100%': '150%'};
`;

export const Amount = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  line-height: 150%;
`;