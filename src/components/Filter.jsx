'use client';

import React, { useState } from 'react';
import './Filter.css';

const Filter = () => {
  // Change from array to single string/null
  const [selectedFilter, setSelectedFilter] = useState(null);

  const developmentFilters = ['Dev tools', 'iOS', 'Web development'];
  const otherFilters = ['Writing', 'Music'];

  const toggleFilter = (filter) => {
    // If clicking the already selected filter, deselect it
    // Otherwise, select the new filter (replacing any previous selection)
    setSelectedFilter(prev => prev === filter ? null : filter);
  };

  return (
    <div id="Filter">
      <div className="filter-section">
        <h3>DEVELOPMENT:</h3>
        <div className="filter-tags">
          {developmentFilters.map(filter => (
            <button
              key={filter}
              // Check if THIS filter equals the selected one
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
          {otherFilters.map(filter => (
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