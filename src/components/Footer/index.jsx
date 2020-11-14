import React from 'react';
import { Section, Div, Info, Button } from './Styled';

const Footer = () => {

  return (
    <Section>
      <Div>
        <Info>
          <h3>$295.95</h3>
          <p>Need financing? Learn More</p>
        </Info>
        <Button>Buy now</Button>
      </Div>
    </Section>
  )
};

export default Footer;