import styled from 'styled-components';
import { BLACK, GREY_BORDER, DARK_BORDER, BLUE, SOFT_GREY, device, RADIUS } from '../../components/Styled';

export const Section = styled.section ` 
  display: flex;
  justify-content: center;
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
  }
`

export const Div = styled.figure ` 
  width: 299px;
  height: 44px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`

export const Button = styled.button ` 
  background-color: transparent;
  border: 0px solid;
  width: 93px;
  height: 44px;
  border: 2px solid ${GREY_BORDER};
  position: inside;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    border: 2px solid ${BLACK};
  }
  img {
    width: 47.64px;
    height: 36.82px;
  }
`