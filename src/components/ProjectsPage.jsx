'use client';

import { useState } from 'react';
import Filter from './Filter';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  // Filter projects based on selected category
  const filteredProjects = selectedFilter
    ? projects.filter(project => project.category === selectedFilter)
    : projects; // Show all if no filter selected

  return (
    <div>
      <h1>Projects</h1>
      
      <Filter onFilterChange={setSelectedFilter} />

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.thumbnail} alt={project.title} />
            <h3>{project.title}</h3>
            <span className="category">{project.category}</span>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}