import React, {useState} from 'react';

import styled from 'styled-components';

const StyledApp = styled.div``;

export const App = () => {

  const [todos, setTodos] = useState([
  ]);

  const addTodo = (event) => {
    event.preventDefault()
    setTodos([...todos, {title: event.target[0].value}])
    event.target[0].value = ''
  }

  return (
    <StyledApp>
      <h1>Todo List</h1>
      <ul>
        {todos.length ? todos.map((todo, index) => <li key={index}>{todo.title}</li>) : "Add your first todo."}
      </ul>
      <h2>New Todo</h2>
      <form action="" onSubmit={addTodo}>
        <label>
          Title
          <input type="text"/>
        </label>
        <input type="submit" value="Add Todo"/>
      </form>
      <button onClick={addTodo}>Do Some More Things</button>
    </StyledApp>
  );
};

export default App;
