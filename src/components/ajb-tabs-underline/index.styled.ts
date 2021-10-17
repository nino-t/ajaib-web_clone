import styled from 'styled-components';

export const TabsUnderline = styled.div`
  > .TabsUnderline__heading {
    overflow-x: scroll;
    border-bottom: 3px solid rgb(245, 245, 245);
    padding: 0px 24px;
    margin-bottom: 12px;  

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
    }
  }
`;

export const TabControlItem = styled.li<{ isActive?: boolean }>`
  cursor: pointer;
  padding: 10px 0px;
  font-size: 14px;
  font-weight: normal;

  color: ${(props) => props.isActive ? 'rgb(58, 131, 249)' : 'rgb(214, 214, 214)'};
  border-bottom: ${(props) => props.isActive ? '2px solid rgb(58, 131, 249)' : 'none'};

  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const TabContent = styled.div`
`;