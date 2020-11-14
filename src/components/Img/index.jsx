import React from 'react';
import { getImg } from '../../components/Images';
import { Section, Figure, Div, Button } from './Styled';
import { useServer } from '../../context';

const Img = (props) => {

  const { valueImg, position } = useServer();
  const { img, name } = props; 

  return (
    <Section>
      <div>
        <Figure>
          {
           position === 0 ? <img src={getImg(img[position].name)} alt={name}/> : 
           <img src={getImg(img[position-1].name)} alt={name}/>
          }
        </Figure>
        <Div>
          {
            img.map(image => (
              <Button key={image.id} onClick={() => valueImg(image.id) }>
                <img src={getImg(image.name)} alt={image}/>
              </Button>
            ))
          }
        </Div>
      </div>
    </Section>
  );
};

export default Img;