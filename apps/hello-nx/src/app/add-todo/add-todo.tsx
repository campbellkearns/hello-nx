import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AddTodoProps {}

const StyledAddTodo = styled.div`
  color: pink;
`;

export const AddTodo = (props: AddTodoProps) => {
  return (
    <StyledAddTodo>
      <h1>Welcome to addTodo component!</h1>
    </StyledAddTodo>
  );
};

export default AddTodo;
