import React from 'react';
import styled from 'styled-components';
import ResponseEntry from './ResponseEntry';

const ListItem = styled.li`
  list-style: none;
  width: 100%;
  background: #ddd;
  margin: 5px 0;
  padding: 10px 20px;
  width: 100%;
`;

const Response = ({ prompt, response }) => {
  return (
    <ListItem>
      <dl>
        <ResponseEntry label="Prompt" value={prompt} />
        <ResponseEntry label="Response" value={response} />
      </dl>
    </ListItem>
  );
};

export default Response;
