import React from 'react';
import styled from 'styled-components';

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
      <b>Prompt:</b> {prompt}
      <br />
      <b>Response:</b> {response}
    </ListItem>
  );
};

export default Response;
