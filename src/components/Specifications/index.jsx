import React from 'react';
// import { useServer } from '../../context';
import { H3, Div, Coverage, Features, Detail, H4, Info } from './Styled';

const Specifications = (props) => {

  // const { general, text } = useServer();
  const { finish, extended, features, specifications } = props;

  return (
    <>
      <H3>Choose your finish.</H3>
      {
        finish.map(fin => (
          <Div key={fin.id}>
            <h4>{fin.name}</h4>
            <p>{fin.description}</p>
          </Div>
        ))
      }
      <H3>Would you like to add extended warranty coverage?.</H3>
      {
        extended.map(ext => (
          <Coverage key={ext.id}>
            <h4>{ext.year}</h4>
            <div>
              {
                ext.value === '' ?
                  <span>{ext.description}</span> :
                  <p>{ext.description}</p>
              }
              {
                ext.value > 0 ? 
                  <h4>{`+ $${ext.value}`}</h4> :
                  ''
              }
            </div>
          </Coverage>
        ))
      }
      <H3>Features</H3>
      {
        features.map(fin => (
          <Features key={fin.id}>
            <h4>{fin.name}</h4>
            {
              fin.value === '' ? 
                '' :
                <h4>{`+ $${fin.value}`}</h4>
            }
          </Features>
        ))
      }
      <H3>Specifications</H3>
      <Detail>
        {
          specifications.map(specification => (
            <div key={specification.id}>
              <H4>{specification.name}</H4>
              <Info>{specification.description}</Info>
              <span></span>
            </div>
          ))
        }
      </Detail>
    </>
  );
};

export default Specifications;