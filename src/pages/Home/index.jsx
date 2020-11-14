import React from 'react';
import Img from '../../components/Img';
import Additional from '../../components/Additional';
import Feature from '../../components/Feature';
import Specifications from '../../components/Specifications';
import { Section } from './Styled';
import { useServer } from '../../context';

const Home = () => {

  const { Data } = useServer();

  return (
    <Section>
      <div>
        <Img img={Data[0].img}/>
        <Feature value={Data[0].value} name={Data[0].name} version={Data[0].version} slogan={Data[0].slogan} description={Data[0].general} />
        <Additional information={Data[0].information}/>
        <Specifications finish={Data[0].finish} extended={Data[0].extended} features={Data[0].features} specifications={Data[0].specifications}/>
      </div>
    </Section>
  );
};

export default Home;