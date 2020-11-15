import styled from 'styled-components';
import { device } from '../../components/Styled';

export const Section = styled.section ` 
  display: flex;
  justify-content: center;
  @media ${device.laptopL} {
    justify-content: flex-end;
    margin-right: 111px;
  }
  @media ${device.desktop} {
    justify-content: flex-end;
    margin-right: 500px;
  }
`

export const Extended = styled.div ` 
  @media ${device.mobileS} {
    width: 299px;
  }
  @media ${device.mobileM} {
    width: 340px;
  }
  @media ${device.tablet} {
    width: 543px;
  }
  @media ${device.laptopL} {
    width: 593px;
  }
`