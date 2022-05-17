import React from 'react';
import styled from 'styled-components';
import Response from './Response';

const Section = styled.section`
  margin-bottom: 50px;
`;

const Responses = ({ log }) => {
  return (
    log.length > 0 && (
      <Section>
        <h2>Responses ({log.length})</h2>
        <ul>
          {log.map((entry, i) => (
            <Response key={i} {...entry} />
          ))}
        </ul>
      </Section>
    )
  );
};

export default Responses;
