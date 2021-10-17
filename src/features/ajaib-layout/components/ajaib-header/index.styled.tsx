import styled from 'styled-components';

export const AjaibHeaderStyled = styled.div`
  height: 42px;
  background: rgb(255, 255, 255);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 99;
  box-shadow: rgb(51 51 51 / 16%) 0px 2px 4px 0px;

  .AjaibHeader__sections {
    display: flex;
    height: 100%;

    > .AjaibHeader__section__secondary {
      width: 336px;
      display: inline-block;
      padding: 4px 16px;
      border-right: 1px solid rgb(245, 245, 245);
    }

    > .AjaibHeader__section__primary {
      width: calc(100% - 336px);
      padding-right: 24px;
      padding-left: 24px;

      display: inline-flex;
      justify-content: space-between;

      .AjaibHeader__AppLogo {
        align-self: center;

        > img {
          width: 82px;
          height: 32px;
          object-fit: contain;
        }
      }

      .AjaibHeader__AppMenu {
      }
    }
  }

  ul.AjaibHeader__IhsgStatistic {
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    > li {
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
    }
  }

  ul.AjaibHeader__nav {  
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    height: 100%;

    > li {
      display: inline-flex;
      margin-right: 8px;
      position: relative;

      &:not(.AjaibHeader__navItem__icon, .AjaibHeader__navItem__profile) {
        &:hover {
          &:after {
            content: "";
            border-bottom: 2px solid #3A83F9;
            display: block;
            position: absolute;
            width: 100%;
            bottom: 0;
          }
        }  
      }

      &:last-child {
        margin-right: 0;
      }

      &.AjaibHeader__navItem__icon {
        img {
          width: 24px;
          height: 24px;
          object-fit: contain;
          margin-left: 8px;
          margin-right: 8px;
        }
      }

      &.AjaibHeader__navItem__profile {
        img {
          object-fit: contain;
          border-radius: 50%;
          width: 32px;
          height: 32px;
        }
      }

      a {
        align-self: center;
        padding: 4px 8px;
        font-size: 14px;
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;