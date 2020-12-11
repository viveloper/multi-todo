import React from 'react';

function Filter({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <select value={value} onChange={handleChange}>
      <option value="all">All</option>
      <option value="done">Done</option>
      <option value="not-done">Not done</option>
    </select>
  );
}

export default Filter;
