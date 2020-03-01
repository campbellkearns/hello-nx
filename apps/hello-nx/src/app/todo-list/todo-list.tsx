import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TodoListProps {}

const StyledTodoList = styled.div`
  color: pink;
`;

export const TodoList = (props: TodoListProps) => {
  return (
    <StyledTodoList>
      <h1>Welcome to todoList component!</h1>
    </StyledTodoList>
  );
};

export default TodoList;
