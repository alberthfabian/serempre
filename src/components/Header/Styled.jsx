import styled from 'styled-components';
import { WHITE, LIGHT_GREY, device } from '../Styled';

export const Section = styled.header ` 
  display: flex;
  justify-content: center;
  background-color: ${WHITE};
  figure {
    display: flex;
    justify-content: center;
    padding-top: 16px;
    margin: 0px;
    @media ${device.mobileS} {
      width: 288px;
      height: 67px;
      border-bottom: 1px solid ${LIGHT_GREY};
    }
    @media ${device.mobileM} {
      width: 339px;
    }
    @media ${device.tablet} {
      width: 542px;
    }
    @media ${device.laptopL} {
      width: 1218px;
    }
    img {
      @media ${device.mobileS} {
        width: 50px;
        height: 50px;
      }
      @media ${device.mobileL} {
        width: 58px;
        height: 58px;
      }
    }
  }
`