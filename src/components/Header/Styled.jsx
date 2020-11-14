import styled from 'styled-components';
import { WHITE, LIGHT_GREY, device } from '../Styled';

export const Section = styled.header ` 
  display: flex;
  justify-content: center;
  background-color: ${WHITE};
  figure {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${LIGHT_GREY};
    padding-top: 16px;
    margin: 0px;
    @media ${device.mobileS} {
      width: 288px;
      height: 67px;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
`