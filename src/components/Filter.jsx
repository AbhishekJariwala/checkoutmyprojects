'use client';

import React, { useState } from 'react';
import './Filter.css';
import { FILTER_CATEGORIES } from './../constants/filters';

const Filter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const toggleFilter = (filter) => {
    const newFilter = selectedFilter === filter ? null : filter;
    setSelectedFilter(newFilter);
    // Pass the selected filter back to parent component
    if (onFilterChange) {
      onFilterChange(newFilter);
    }
  };

  return (
    <div id="Filter">
      <div className="filter-section">
        <h3>DEVELOPMENT:</h3>
        <div className="filter-tags">
          {FILTER_CATEGORIES.DEVELOPMENT.map(filter => (
            <button
              key={filter}
              className={`filter-tag ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => toggleFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>OTHER:</h3>
        <div className="filter-tags">
          {FILTER_CATEGORIES.OTHER.map(filter => (
            <button
              key={filter}
              className={`filter-tag ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => toggleFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;