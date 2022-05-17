import React from 'react';
import Response from './Response';

const Responses = ({ log }) => {
  return (
    log.length > 0 && (
      <section>
        <h2>Responses ({log.length})</h2>
        <ul>
          {log.map((entry, i) => (
            <Response key={i} {...entry} />
          ))}
        </ul>
      </section>
    )
  );
};

export default Responses;
