import styled from 'styled-components';
import { RED, SPACE48, SPACE8, BLACK, DARK_GREY, SIZE13, HEIGHT32, HEIGHT16, SIZE33, SIZE27, SIZE16, BOLD, SIZE40, HEIGHT48, ZERO, MEDIUM, NORMAL, HEIGHT24, device } from '../../components/Styled';

export const Section = styled.section ` 
  @media ${device.mobileS} {
    margin-top: ${SPACE48};
  }
  h1 {
    color: ${BLACK};
    margin-left: ${ZERO};
    margin-right: ${ZERO};
    margin-bottom: ${ZERO};
    font-weight: bold;
    font-size: ${SIZE33};
    font-family: 'Roboto',sans-serif;
    @media ${device.mobileS} {
      margin-top: ${SPACE8};
    }
  }
`

export const Description = styled.p ` 
  font-family: 'Roboto',sans-serif;
  font-weight: ${NORMAL};
  font-size: ${SIZE16};
  line-height: ${HEIGHT24};
  color: ${DARK_GREY};
`

export const Version = styled.p ` 
  font-family: 'Roboto',sans-serif;
  color: ${RED};
  margin: ${ZERO};
  @media ${device.mobileS} {
    font-size: ${SIZE13};
    line-height: ${HEIGHT16};
    font-weight: normal;
  }
`

export const Slogan = styled.p ` 
  font-family: 'Roboto',sans-serif;
  color: ${DARK_GREY};
  font-size: ${SIZE27};
  line-height: ${HEIGHT32};
  font-weight: normal;
  margin: ${ZERO};
`

export const Start = styled.p `
  font-family: 'Roboto',sans-serif; 
  margin-top: ${SPACE48};
  margin-left: ${ZERO};
  margin-right: ${ZERO};
  margin-bottom: ${ZERO};
  color: ${DARK_GREY};
  font-size: ${SIZE13};
  line-height: ${HEIGHT16};
`

export const Value = styled.p `
  font-family: 'Roboto',sans-serif;
  height: ${SPACE48};
  font-weight: ${BOLD};
  color: ${BLACK};
  font-size: ${SIZE40};
  line-height: ${HEIGHT48};
  @media ${device.mobileS} {
    margin-top: ${SPACE8};
    margin-left: ${ZERO};
    margin-right: ${ZERO};
    margin-bottom: ${SPACE48};
  }
`

export const General = styled.section ` 
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button ` 
  font-family: 'Roboto',sans-serif;
  color: ${DARK_GREY};
  font-weight: ${MEDIUM};
  background-color: transparent;
  border: 0px solid;
  cursor: pointer;
  :hover {
    text-decoration-line: underline;
  }
  :focus {
    outline: none;
    color: ${BLACK};
    text-decoration-line: underline;
  }
  @media ${device.mobileS} {
    font-size: ${SIZE16};
  }
`