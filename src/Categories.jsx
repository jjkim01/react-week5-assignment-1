import React from 'react';

export default function Categories({ categories, selectedCategory, onClick }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {selectedCategory === id ? `${name} (V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}