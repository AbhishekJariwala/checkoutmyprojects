'use client';

import { useState } from 'react';
import Filter from './Filter';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const filteredProjects = selectedFilter
    ? projects.filter(project => project.category === selectedFilter)
    : projects;

  return (
    <div>
      <h1 className="text-3xl font-medium">Flagship Projects</h1>
      <ProjectCard project={projects[0]} />
      
      <Filter onFilterChange={setSelectedFilter} />

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}