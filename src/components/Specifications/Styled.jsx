import styled from 'styled-components';
import { MEDIUM, SIZE19, HEIGHT24, BLACK, device, ZERO, SPACE48, WIDTH299, WIDTH340, GREY_BORDER, RADIUS, SPACE12, SIZE14, HEIGHT20, DARK_GREY, NORMAL, PADDING24, PADDING4, SPACE16, SPACE20, WIDTH200, SPACE2, HEIGHT16, DARK_BORDER, BLUE, SOFT_GREY, WIDTH245 } from '../Styled';

export const H3 = styled.h3 `
  font-family: 'Roboto',sans-serif; 
  font-weight: ${MEDIUM};
  font-size: ${SIZE19};
  line-height: ${HEIGHT24};
  color: ${BLACK};
  @media ${device.mobileS} {
    margin: ${SPACE48} ${ZERO} ${SPACE12} ${ZERO};
  }
  @media ${device.tablet} {
    margin: 73px ${ZERO} ${SPACE12} ${ZERO};
  }
`

export const Choose = styled.div ` 
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
  }
`

export const Div = styled.button ` 
  background-color: transparent;
  border: 0px solid;
  outline: none;
  text-align: left;
  border: 2px solid ${GREY_BORDER};
  border-radius: ${RADIUS};
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
  @media ${device.mobileS} {
    width: ${WIDTH299};
    padding: ${PADDING24} ${ZERO} ${PADDING4} ${ZERO};
    margin-bottom: ${SPACE16};
  }
  @media ${device.mobileM} {
    width: ${WIDTH340};
  }
  @media ${device.tablet} {
    width: 263px;
    height: 136px;
    padding: ${PADDING24} ${ZERO} ${PADDING24} ${ZERO};
    margin-bottom: 0px;
  }
  h4 {
    font-family: 'Roboto',sans-serif;
    color: ${BLACK};
    margin: ${ZERO} ${SPACE20} ${PADDING4} ${SPACE20};
    @media ${device.mobileS} {
      font-weight: ${MEDIUM};
      font-size: ${SIZE14};
      line-height: ${HEIGHT20};
    }
  }
  p {
    font-family: 'Roboto',sans-serif;
    color: ${DARK_GREY};
    margin: ${ZERO} ${SPACE20} ${ZERO} ${SPACE20};
    @media ${device.mobileS} {
      font-weight: ${NORMAL};
      font-size: ${SIZE14};
      line-height: ${HEIGHT20};
    }
  }
`

export const Coverage = styled.button `
  background-color: transparent;
  border: 0px solid;
  outline: none;
  text-align: left; 
  border: 2px solid ${GREY_BORDER};
  border-radius: ${RADIUS};
  margin-bottom: ${SPACE16};
  @media ${device.mobileS} {
    width: ${WIDTH299};
    padding-top: ${PADDING24};
  }
  @media ${device.mobileM} {
    width: ${WIDTH340};
  }
  @media ${device.tablet} {
    width: 543px;
    padding-top: ${PADDING24};
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
  h4 {
    font-family: 'Roboto',sans-serif;
    color: ${BLACK};
    margin: ${ZERO} ${SPACE20} ${PADDING4} ${SPACE20};
    font-family: 'Roboto',sans-serif;
    @media ${device.mobileS} {
      font-weight: ${MEDIUM};
      font-size: ${SIZE14};
      line-height: ${HEIGHT20};
    }
  }
`

export const Container = styled.div ` 
  display: flex;
  padding-bottom: ${PADDING24};
  span {
    color: ${DARK_GREY};
    margin: ${ZERO} ${SPACE20} ${ZERO} ${SPACE20};
    @media ${device.mobileS} {
      font-weight: ${NORMAL};
      font-size: ${SIZE14};
      line-height: ${HEIGHT20};
    }
  }
  p {
    font-family: 'Roboto',sans-serif;
    color: ${DARK_GREY};
    margin: ${ZERO} ${SPACE20} ${ZERO} ${SPACE20};
    font-family: 'Roboto',sans-serif;
    @media ${device.mobileS} {
      font-weight: ${NORMAL};
      font-size: ${SIZE14};
      line-height: ${HEIGHT20};
      width: ${WIDTH200};
    }
    @media ${device.mobileM} {
      width: ${WIDTH245};    
    }
    @media ${device.tablet} {
      width: 444px;    
    }
  }
  h4 {
    font-family: 'Roboto',sans-serif;
    margin: ${ZERO};
    color: ${BLACK};
    font-family: 'Roboto',sans-serif;
    font-weight: ${NORMAL};
    font-size: ${SIZE14};
    line-height: ${HEIGHT20};
  }
`

export const Contains = styled.div ` 
  display: block;
  padding-bottom: ${PADDING24};
  span {
    color: ${DARK_GREY};
    margin: ${ZERO} ${SPACE20} ${ZERO} ${SPACE20};
    @media ${device.mobileS} {
      font-weight: ${NORMAL};
      font-size: ${SIZE14};
      line-height: ${HEIGHT20};
    }
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
  }
`

export const Features = styled.button ` 
  background-color: transparent;
  border: 0px solid;
  outline: none;
  text-align: left; 
  display: flex;
  justify-content: space-between;
  border: 2px solid ${GREY_BORDER};
  border-radius: ${RADIUS};
  padding-top: ${PADDING24};
  padding-bottom: ${PADDING24};
  margin-bottom: ${SPACE16};
  @media ${device.mobileS} {
    width: ${WIDTH299};
  }
  @media ${device.mobileM} {
    width: ${WIDTH340};
  }
  @media ${device.tablet} {
    width: 543px;
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
  h4 {
    font-family: 'Roboto',sans-serif;
    color: ${BLACK};
    @media ${device.mobileS} {
      font-weight: ${MEDIUM};
      font-size: ${SIZE14};
      line-height: ${HEIGHT20};
      margin: ${ZERO} ${SPACE20} ${PADDING4} ${SPACE20};
    }
    @media ${device.tablet} {
      margin: ${ZERO} ${SPACE20} ${ZERO} ${SPACE20};
    }
  }
`

export const Detail = styled.div ` 
  div {
    border-bottom: 1px solid ${GREY_BORDER};
    padding: ${HEIGHT16} ${ZERO} ${HEIGHT16} ${ZERO};
  }
  @media ${device.mobileS} {
    width: ${WIDTH299}; 
  }
  @media ${device.mobileM} {
    width: ${WIDTH340}; 
  }
  @media ${device.tablet} {
    width: 543px; 
  }
`

export const H4 = styled.h4 ` 
  font-family: 'Roboto',sans-serif;
  font-weight: ${MEDIUM};
  font-size: ${SIZE14};
  line-height: ${HEIGHT20};
  color: ${BLACK};
  @media ${device.mobileS} {
    margin: ${ZERO} ${ZERO} ${SPACE2} ${ZERO};
  }
`

export const Info = styled.p ` 
  font-family: 'Roboto',sans-serif;
  font-weight: ${MEDIUM};
  font-size: ${SIZE14};
  line-height: ${HEIGHT20};
  @media ${device.mobileS} {
    margin: ${ZERO};
  }
  @media ${device.mobileM} {
    margin: ${ZERO};
  }
`

