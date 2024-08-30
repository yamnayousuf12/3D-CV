import React from 'react';
import Table from './Table';

const Projects = ({ projects }) => {
  const headers = ['Project', 'Details', 'Sponsor'];
  const data = projects.map((project) => [
    project.project,
    project.details.join(', '),
    project.sponsor,
  ]);

  return (
    
      <Table headers={headers} data={data} />
  );
};

export default Projects;
