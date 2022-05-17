import React from 'react';
import styled from 'styled-components';

const typeWidth = 110;

const EntryType = styled.dt`
  font-weight: bold;
  width: ${typeWidth}px;
  display: inline-block;
  vertical-align: top;
  margin: 5px 0;
`;

const EntryValue = styled.dd`
  display: inline-block;
  width: calc(100% - ${typeWidth}px);
  margin: 5px 0;
`;

const ResponseEntry = ({ label, value }) => {
  return (
    <>
      <EntryType>{label}:</EntryType>
      <EntryValue>{value}</EntryValue>
    </>
  );
};

export default ResponseEntry;
