import React, {useState} from 'react';

import styled from 'styled-components';

const StyledApp = styled.div``;

export const App = () => {

  const [todos, setTodos] = useState([
    {title: 'Learn about hooks'},
    {title: 'Rent a Jeep'}
  ]);

  const addTodo = (event) => {
    event.preventDefault()
    console.log(event.target[0])
    setTodos([...todos, {title: event.target[0].value}])
  }

  return (
    <StyledApp>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => <li>{todo.title}</li>)}
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
