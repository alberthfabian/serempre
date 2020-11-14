import styled from 'styled-components';
import { LIGHT_GREY, GREY, BLACK, WHITE, BLUE, DARK_GREY, SMALL, SPACE96, device } from '../Styled';

export const Section = styled.footer ` 
  background-color: ${LIGHT_GREY};
  border: 1px solid ${GREY};
  position: outside;
  display: flex;
  justify-content: flex-end;
  @media ${device} {
    height: 182px;
    padding-top: 23px;
    padding-right: 32px;
    margin-top: ${SPACE96};
  }
`

export const Div = styled.div ` 
  text-align: end;
  @media ${device.mobileS} {
    width: 195px;
    height: 134px;
  }
`

export const Info = styled.div ` 
  h3 {
    font-family: 'Roboto', sans-serif;
    margin: 0px;
    widows: 103px;
    height: 32px;
    font-weight: 700px;
    line-height: 32px;
    color: ${BLACK};
    font-size: 27.648px;
    margin-bottom: 2px;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: ${SMALL};
    line-height: 20px;
    color: ${DARK_GREY};
    width: 195px;
    height: 20px;
    margin: 0px;
  }
  @media ${device.mobileS} {
    width: 195px;
    height: 54px;
  }
`

export const Button = styled.button ` 
  width: 113px;
  height: 56px;
  background-color: ${BLUE};
  font-family: 'Roboto', sans-serif;
  border: 0px solid;
  border-radius: 8px;
  color: ${WHITE};
  padding: 16px 24px 16px 24px;
  @media ${device.mobileS} {
    margin-top: 24px;
  }
`