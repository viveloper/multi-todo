// import './App.css';

import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      category: 'To Check',
      todos: [
        {
          id: 1,
          done: false,
          text: 'check my wallet1',
        },
        {
          id: 2,
          done: false,
          text: 'check my wallet2',
        },
      ],
    },
    {
      id: 2,
      category: 'To Buy',
      todos: [],
    },
    {
      id: 3,
      category: 'To Read',
      todos: [],
    },
  ]);

  const changeInput = (todosId, todoId, text) => {
    console.log({ todosId, todoId, text });

    const newState = todos.map((item) =>
      item.id === todosId
        ? {
            ...item,
            todos: item.todos.map((todoItem) =>
              todoItem.id === todoId ? { ...todoItem, text } : todoItem
            ),
          }
        : item
    );
    setTodos(newState);
  };

  return (
    <div className="App">
      <Title title="Todos Application" />
      {todos.map((item) => (
        <Todos
          key={item.id}
          todosId={item.id}
          category={item.category}
          todos={item.todos}
          onInputChange={changeInput}
        />
      ))}
    </div>
  );
}

function Title({ title }) {
  return <div>{title}</div>;
}

function Todos({ category, todosId, todos, onInputChange }) {
  return (
    <>
      <h3>{category}</h3>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todosId={todosId}
            todo={todo}
            onInputChange={onInputChange}
          />
        ))}
      </ul>
    </>
  );
}

function Todo({ todosId, todo, onInputChange }) {
  const handleInputChange = (e) => {
    onInputChange(todosId, todo.id, e.target.value);
  };
  return (
    <li>
      <input value={todo.text} onChange={handleInputChange} />
      <button>Down</button>
      <button>Remove</button>
      <button>Done</button>
    </li>
  );
}

export default App;
