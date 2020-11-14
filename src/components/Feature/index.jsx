import React from 'react';
import { useServer } from '../../context';
import { Section, Version, Slogan, Start, Value, General, Button, Description } from './Styled';

const Feature = (props) => {

  const { general, text } = useServer();
  const { version, name, slogan, value, description } = props;

  return (
    <Section>
      <Version>{version}</Version>
      <h1>{name}</h1>
      <Slogan>{slogan}</Slogan>
      <Start>STARTING AT</Start>
      <Value>{value}</Value>
      <General>
        {
          description.map(des => ( 
            <Button onClick={() => general(des.id)} key={des.id}>
              {des.name}
            </Button>
          ))
        }
      </General>
      {
        text === 0 ? <Description>{description[text].description}</Description> :           
        <Description>{description[text-1].description}</Description>
      }
    </Section>
  );
};

export default Feature;