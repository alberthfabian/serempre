import React from 'react';
import { getImg } from '../Images';
import { Section } from './Styled';

const Additional = (props) => {

  const { information } = props;

  return (
    <Section>
        {
          information.map(info => (
            <div key={info.id}>
              <img src={getImg(info.img)} alt={info.name}/>
              <p>{info.name}</p>
            </div>
          ))
        }
    </Section>
  );
};

export default Additional;