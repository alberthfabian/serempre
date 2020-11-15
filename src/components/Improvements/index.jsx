import React from 'react';
import { getImg } from '../Images';
import { Section } from './Styled';

const Improvements = (props) => {

  const { information } = props;

  return (
    <Section>
      <div>
        <img src={getImg(information[0].img)} alt={information[0].img}/>
        <p>{information[0].name}</p>
      </div>
      <div>
        <img src={getImg(information[2].img)} alt={information[2].img}/>
        <p>{information[2].name}</p>
      </div>
      <div>
        <img src={getImg(information[1].img)} alt={information[1].img}/>
        <p>{information[1].name}</p>
      </div>
    </Section>
  );
};

export default Improvements;