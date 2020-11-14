import styled from 'styled-components';
import { device } from '../../components/Styled';

export const Section = styled.section ` 
  display: flex;
  justify-content: center;
  div {
    @media ${device.mobileS} {
      width: 299px;
    }
  }
`