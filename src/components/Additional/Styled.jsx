import styled from 'styled-components';
import { BLACK, SMALL, device } from '../Styled';

export const Section = styled.section `
  div {
    text-align: center;
    display: table;
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
    @media ${device.mobileS} {
      width: 299px;
      height: 63px;
      margin-top: 40px;
    }
  } 
`