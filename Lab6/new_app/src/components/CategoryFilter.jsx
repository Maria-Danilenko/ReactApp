import React from 'react';

const CategoryFilter = ({ categories, onFilter, onReset }) => {
  return (
    <div className="d-flex flex-column list-group">
        <button type="button" className="list-group-item list-group-item-action list-group-item-primary" onClick={onReset}>Показати все</button>
        {categories.map((category) => (
            <button type="button" className="list-group-item list-group-item-action" key={category} onClick={() => onFilter(category)}>
            {category}
            </button>
      ))}
    </div>
  );
};

export default CategoryFilter;