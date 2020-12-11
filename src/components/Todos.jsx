import React from 'react';
import Filter from './Filter';
import Todo from './Todo';

function Todos({
  category,
  isFirstCategory,
  isLastCategory,
  onInputChange,
  onCreate,
  onUpClick,
  onDownClick,
  onDoneClick,
  onRemoveClick,
  onFilterChange,
}) {
  const { id, name, todos, filterOption } = category;

  const handleCreateClick = () => {
    onCreate(id);
  };

  const handleFilterChange = (value) => {
    onFilterChange(id, value);
  };

  return (
    <div className="todos">
      <h2>{name}</h2>
      <ul>
        {todos
          .filter((todo) =>
            filterOption === 'done'
              ? todo.done
              : filterOption === 'not-done'
              ? !todo.done
              : true
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              categoryId={id}
              todo={todo}
              isFirstCategory={isFirstCategory}
              isLastCategory={isLastCategory}
              onInputChange={onInputChange}
              onUpClick={onUpClick}
              onDownClick={onDownClick}
              onDoneClick={onDoneClick}
              onRemoveClick={onRemoveClick}
            />
          ))}
      </ul>
      <div className="todos-footer">
        <button onClick={handleCreateClick}>Create</button>
        <Filter value={filterOption} onChange={handleFilterChange} />
      </div>
    </div>
  );
}

export default Todos;
