import React from 'react';
import { Section, Div, Info, Button, Shipping, Year, InfoFooter } from './Styled';

const Footer = () => {

  return (
    <Section>
      <Shipping>
        <p>Free Shipping</p>
        <Year>2 year warranty</Year>
      </Shipping>
      <InfoFooter>
        <div>
          <h4>Free Shipping</h4>
          <p>Get 2-day free shipping anywhere in North America.</p>
        </div>
        <div>
          <h4>2 years warranty</h4>
          <p>If anything goes wrong in the first two years, we'll replace it for free.</p>
        </div>
      </InfoFooter>
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