import Title from './components/Title';
import Todos from './components/Todos';
import './App.css';

import { useState } from 'react';

const initialState = [
  {
    id: 0,
    name: 'To Check',
    todos: [
      {
        id: 0,
        done: false,
        text: 'check my wallet',
      },
      {
        id: 1,
        done: false,
        text: 'check my phone',
      },
    ],
    filterOption: 'all',
  },
  {
    id: 1,
    name: 'To Buy',
    todos: [
      {
        id: 2,
        done: false,
        text: 'iMac',
      },
      {
        id: 3,
        done: false,
        text: 'D5',
      },
    ],
    filterOption: 'all',
  },
  {
    id: 2,
    name: 'To Read',
    todos: [
      {
        id: 4,
        done: false,
        text: `You don't know javascript`,
      },
      {
        id: 5,
        done: false,
        text: 'Secret of JavaScript Ninja',
      },
    ],
    filterOption: 'all',
  },
];

let todoId = 6;

function App() {
  const [categories, setCategories] = useState(initialState);

  const changeInput = (categoryId, todoId, text) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              todos: category.todos.map((todo) =>
                todo.id === todoId ? { ...todo, text } : todo
              ),
            }
          : category
      )
    );
  };

  const createTodo = (categoryId) => {
    const newTodo = {
      id: todoId++,
      done: false,
      text: '',
    };
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              todos: [...category.todos, newTodo],
            }
          : category
      )
    );
  };

  const moveUpTodo = (categoryId, todo) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId - 1
          ? {
              ...category,
              todos: [...category.todos, todo],
            }
          : category.id === categoryId
          ? {
              ...category,
              todos: category.todos.filter((item) => item.id !== todo.id),
            }
          : category
      )
    );
  };

  const moveDownTodo = (categoryId, todo) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId + 1
          ? {
              ...category,
              todos: [...category.todos, todo],
            }
          : category.id === categoryId
          ? {
              ...category,
              todos: category.todos.filter((item) => item.id !== todo.id),
            }
          : category
      )
    );
  };

  const toggleDoneTodo = (categoryId, todoId) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              todos: category.todos.map((todo) =>
                todo.id === todoId ? { ...todo, done: !todo.done } : todo
              ),
            }
          : category
      )
    );
  };

  const removeTodo = (categoryId, todoId) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              todos: category.todos.filter((todo) => todo.id !== todoId),
            }
          : category
      )
    );
  };

  const changeCategoryFilter = (categoryId, value) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              filterOption: value,
            }
          : category
      )
    );
  };
  const changeAllCategoryFilter = (value) => {
    setCategories(
      categories.map((category) => ({ ...category, filterOption: value }))
    );
  };

  return (
    <div className="App">
      <Title
        title="Todos Application"
        onFilterChange={changeAllCategoryFilter}
      />
      {categories.map((category, index) => (
        <Todos
          key={category.id}
          category={category}
          isFirstCategory={index === 0}
          isLastCategory={index === categories.length - 1}
          onInputChange={changeInput}
          onCreate={createTodo}
          onUpClick={moveUpTodo}
          onDownClick={moveDownTodo}
          onDoneClick={toggleDoneTodo}
          onRemoveClick={removeTodo}
          onFilterChange={changeCategoryFilter}
        />
      ))}
    </div>
  );
}

export default App;
