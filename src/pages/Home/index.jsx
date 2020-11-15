import React from 'react';
import Img from '../../components/Img';
import Additional from '../../components/Additional';
import Improvements from '../../components/Improvements';
import Feature from '../../components/Feature';
import Specifications from '../../components/Specifications';
import { Section, Extended } from './Styled';
import { useServer } from '../../context';

const Home = () => {

  const { Data } = useServer();

  return (
    <Section>
      <Extended>
        <Img img={Data[0].img}/>
        <Improvements information={Data[0].information}/>
        <Feature value={Data[0].value} name={Data[0].name} version={Data[0].version} slogan={Data[0].slogan} description={Data[0].general} />
        <Additional information={Data[0].information}/>
        <Specifications finish={Data[0].finish} extended={Data[0].extended} features={Data[0].features} specifications={Data[0].specifications}/>
      </Extended>
    </Section>
  );
};

export default Home;