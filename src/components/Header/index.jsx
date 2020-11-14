import React from 'react';
import { Section } from './Styled';
import { getImg } from '../Images';

const Header = () => {

  return (
    <Section>
      <figure>
        <img src={ getImg('serempre') } alt='serempre'/>
      </figure>
    </Section>
  );
};

export default Header;