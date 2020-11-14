import styled from 'styled-components';
import { MEDIUM, SIZE19, HEIGHT24, BLACK, device, ZERO, SPACE48, WIDTH298, GREY_BORDER, RADIUS, SPACE12, SIZE14, HEIGHT20, DARK_GREY, NORMAL, PADDING24, PADDING4, SPACE16, SPACE20, WIDTH200, SPACE2, HEIGHT16, DARK_BORDER, BLUE, SOFT_GREY } from '../Styled';

export const H3 = styled.h3 `
  font-family: 'Roboto',sans-serif; 
  font-weight: ${MEDIUM};
  font-size: ${SIZE19};
  line-height: ${HEIGHT24};
  color: ${BLACK};
  @media ${device.mobileS} {
    margin: ${SPACE48} ${ZERO} ${SPACE12} ${ZERO};

  }
`

export const Div = styled.button ` 
  background-color: transparent;
  border: 0px solid;
  outline: none;
  text-align: left;
  border: 2px solid ${GREY_BORDER};
  border-radius: ${RADIUS};
  padding: ${PADDING24} ${ZERO} ${PADDING4} ${ZERO};
  margin-bottom: ${SPACE16};
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
    width: ${WIDTH298};
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

export const Coverage = styled.div ` 
  border: 2px solid ${GREY_BORDER};
  border-radius: ${RADIUS};
  padding-top: ${PADDING24};
  margin-bottom: ${SPACE16};
  @media ${device.mobileS} {
    width: ${WIDTH298};
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
  div {
    display: flex;
    padding-bottom: ${PADDING24};
    span {
      font-family: 'Roboto',sans-serif;
      color: ${DARK_GREY};
      margin: ${ZERO} ${SPACE20} ${ZERO} ${SPACE20};
      font-family: 'Roboto',sans-serif;
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
  }
`

export const Features = styled.div ` 
  display: flex;
  justify-content: space-between;
  border: 2px solid ${GREY_BORDER};
  border-radius: ${RADIUS};
  padding-top: ${PADDING24};
  padding-bottom: ${PADDING24};
  margin-bottom: ${SPACE16};
  @media ${device.mobileS} {
    width: ${WIDTH298};
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
    @media ${device.mobileS} {
      font-weight: ${MEDIUM};
      font-size: ${SIZE14};
      line-height: ${HEIGHT20};
    }
  }
`

export const Detail = styled.div ` 
  width: ${WIDTH298};
  div {
    border-bottom: 1px solid ${GREY_BORDER};
    padding: ${HEIGHT16} ${ZERO} ${HEIGHT16} ${ZERO};
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
  color: ${BLACK};
  @media ${device.mobileS} {
    margin: ${ZERO} ${ZERO} ${ZERO} ${ZERO};
  }
`

