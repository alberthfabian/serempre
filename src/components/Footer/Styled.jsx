import styled from 'styled-components';
import { LIGHT_GREY, GREY, BLACK, WHITE, BLUE, DARK_GREY, SMALL, SPACE96, LIGHT_BLUE, SOFT_GREY, device, MEDIUM, SIZE14, HEIGHT24, NORMAL, HEIGHT20 } from '../Styled';

export const Section = styled.footer ` 
  background-color: ${LIGHT_GREY};
  border: 1px solid ${GREY};
  position: outside;
  display: flex;
  z-index: 100;
  position: relative;
  @media ${device.mobileS} {
    height: 182px;
    padding-top: 23px;
    padding-right: 32px;
    margin-top: ${SPACE96};
    justify-content: flex-end;
  }
  @media ${device.tablet} {
    justify-content: space-between;
    padding-right: 108px;
    padding-left: 108px;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 112px;
  }
  @media ${device.laptopL} {
    height: 152px;
  }
`

export const Shipping = styled.div ` 
  position: relative;
  p {
    font-family: 'Roboto',sans-serif;
    font-weight: ${MEDIUM};
    font-size: ${SIZE14};
    line-height: ${HEIGHT24};
    color: ${BLACK};
    margin: 0px;
  }
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: grid;
    width: 107px;
    height: 64px;
    margin-top: 23px;
  }
  @media ${device.laptopL} {
    display: none;
  }
` 

export const InfoFooter = styled.div ` 
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptopL} {
    display: flex;
    div {
      width: 280px;
      height: 72px;
      margin-top: 40px; 
      h4 {
        font-family: 'Roboto',sans-serif;
        margin: 0px 0px 4px 0px;
        font-weight: ${MEDIUM};
        font-size: ${SIZE14};
        line-height: ${HEIGHT24};
        color: ${BLACK};
      }
      p {
        font-family: 'Roboto',sans-serif;
        margin: 0px 0px 0px 0px;
        font-weight: ${NORMAL};
        font-size: ${SIZE14};
        line-height: ${HEIGHT20};
        color: ${DARK_GREY};
      }
    }
  }
`

export const Year = styled.p ` 
    position: absolute;
    bottom: 0px;
    font-family: 'Roboto',sans-serif;
    font-weight: ${MEDIUM};
    font-size: ${SIZE14};
    line-height: ${HEIGHT24};
    color: ${BLACK};
    margin: 0px;
`

export const Div = styled.div ` 
  text-align: end;
  @media ${device.mobileS} {
    width: 195px;
    height: 134px;
  }
  @media ${device.tablet} {
    display: flex;
    width: 340px;
    height: 56px;
    margin-top: 28px;
  }
  @media ${device.laptopL} {
    margin-top: 48px;
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
  background-color: transparent;
  border: 0px solid;
  width: 113px;
  height: 56px;
  background-color: ${BLUE};
  font-family: 'Roboto', sans-serif;
  border: 0px solid;
  border-radius: 8px;
  color: ${WHITE};
  padding: 16px 24px 16px 24px;
  cursor: pointer;
  :hover {
    background-color: ${LIGHT_BLUE};
  }
  :focus {
    border: 3px solid ${SOFT_GREY};
    position: outside;
    outline: none;
  }
  @media ${device.mobileS} {
    margin-top: 24px;
  }
  @media ${device.tablet} {
    margin-top: 0px;
    margin-left: 32px;
  }
`