import React from 'react';

function Todo({
  categoryId,
  isFirstCategory,
  isLastCategory,
  todo,
  onInputChange,
  onUpClick,
  onDownClick,
  onDoneClick,
  onRemoveClick,
}) {
  const handleInputChange = (e) => {
    onInputChange(categoryId, todo.id, e.target.value);
  };

  const handleUpClick = () => {
    onUpClick(categoryId, todo);
  };

  const handeDownClick = () => {
    onDownClick(categoryId, todo);
  };

  const handleDoneClick = () => {
    onDoneClick(categoryId, todo.id);
  };

  const handleRemoveClick = () => {
    onRemoveClick(categoryId, todo.id);
  };

  return (
    <li className="todo">
      <input
        className={todo.done ? 'done' : null}
        value={todo.text}
        onChange={handleInputChange}
      />
      <div className="button-group">
        {!isFirstCategory && <button onClick={handleUpClick}>Up</button>}
        {!isLastCategory && <button onClick={handeDownClick}>Down</button>}
        <button onClick={handleRemoveClick}>Remove</button>
        <button onClick={handleDoneClick}>
          {todo.done ? 'Undone' : 'Done'}
        </button>
      </div>
    </li>
  );
}

export default Todo;
