import styled from 'styled-components';

export const SingleBanner = styled.div`
  height: 112px;
  background-color: rgb(250, 188, 42);
  box-shadow: rgb(51 51 51 / 12%) 0px 6px 12px -6px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Banner = styled.img`
  width: 125px;
`;

export const Tag = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: rgb(51, 51, 51);

  display: block;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.05em;
  white-space: nowrap;
  vertical-align: middle;
  color: rgb(255, 255, 255);

  cursor: pointer;
  box-shadow: none;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  min-width: 82px;
  background-color: rgb(58, 131, 249);
  
  transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
`;