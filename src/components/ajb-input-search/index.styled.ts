import styled from 'styled-components';

export const InputSearch = styled.div`
  padding: 8px;
  background-color: rgb(245, 245, 245);

  > .InputSearch__field {
    display: flex;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);

    > input {
      font-size: 13px;
  
      width: calc(100% - 56px);
      padding-top: 11px;
      padding-bottom: 11px;
      padding-left: 8px;
  
      border: none;
      box-shadow: none;
      outline: none;
    }

    > div {
      align-self: center;
      justify-content: flex-end;

      > img {
        width: 24px;
        margin-right: 8px;
      }
    }
  }
`;