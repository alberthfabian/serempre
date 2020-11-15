import styled from 'styled-components';
import { BLACK, SMALL, device } from '../Styled';

export const Section = styled.section `
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    width: 543px;
    margin-top: 76px;
  }
  @media ${device.laptopL} {
    position: fixed;
    left: 112px;
    top: 576px;
  }
  @media ${device.desktop} {
    position: fixed;
    left: 500px;
    top: 576px;
  }
  div {
    display: block;
    text-align: center;
    img {
      @media ${device.mobileS} {
        width: 22px;
        height: 27px;
      }
    }
    p {
      font-family: 'Roboto',sans-serif;
      margin: 0px;
      color: ${BLACK};
      font-size: ${SMALL};
      font-weight: normal;
      line-height: 20px;
      display: table-footer-group;
    }
  } 
`