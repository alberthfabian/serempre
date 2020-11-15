import styled from 'styled-components';
import { BLACK, GREY_BORDER, DARK_BORDER, BLUE, SOFT_GREY, device, RADIUS } from '../../components/Styled';

export const Section = styled.section ` 
  display: flex;
  justify-content: center;
  @media ${device.laptopL} {
    position: fixed;
    left: 112px;
  }
  @media ${device.desktop} {
    position: fixed;
    left: 500px;
  }
`

export const Figure = styled.button ` 
  background-color: transparent;
  border: 0px solid;
  outline: none;
  display: flex;
  justify-content: center;
  @media ${device.mobileS} {
    margin-top: 48px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    width: 299px;
    height: 183px;
    border: 2px solid ${GREY_BORDER};
    position: inside;
    border-radius: 8px;
  }
  @media ${device.mobileM} {
    width: 340px;
    height: 223px;
  }
  @media ${device.tablet} {
    width: 543px;
    height: 337px;
  }
  cursor: pointer;
  :hover {
    border: 2px solid ${DARK_BORDER};
  }
  ::selection {
    border: 2px solid ${BLUE};
  }
  :focus {
    border-radius: ${RADIUS};
    border: 2px solid ${BLUE};
  }
  :active {
    border-radius: ${RADIUS};
    border: 2px solid ${BLUE};
    box-shadow: 0 0 1pt 3pt ${SOFT_GREY};
  }
  img {
    @media ${device.mobileS} {
      width: 166.11px;
      height: 178.67px;
    }
    @media ${device.mobileM} {
      width: 206.11px;
      height: 218.67px;
    }
    @media ${device.tablet} {
      width: 300.85px;
      height: 328.98px;
    }
  }
`

export const Div = styled.figure `
  margin: 0px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  @media ${device.mobileS} {
    width: 299px;
  }
  @media ${device.mobileM} {
    width: 340px;
  }
  @media ${device.tablet} {
    width: 543px;
  }
`

export const Button = styled.button ` 
  background-color: transparent;
  border: 0px solid;
  border: 2px solid ${GREY_BORDER};
  position: inside;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    border: 2px solid ${BLACK};
  }
  @media ${device.mobileS} {
    width: 93px;
    height: 44px;
  }
  @media ${device.tablet} {
    width: 170.99px;
    height: 100px;
  }
  img {
    @media ${device.mobileS} {
      width: 47.64px;
      height: 36.82px;
    }
    @media ${device.mobileM} {
      width: 49.64px;
      height: 38.82px;
    }
    @media ${device.tablet} {
      width: 75.9px;
      height: 83px;
    }
  }
`