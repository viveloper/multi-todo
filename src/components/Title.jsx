import React from 'react';
import Filter from './Filter';

function Title({ title, onFilterChange }) {
  console.log('[render Title Component]');
  return (
    <header>
      <h2>{title}</h2>
      <Filter onChange={onFilterChange} />
    </header>
  );
}

export default React.memo(Title);
