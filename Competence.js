
import React from 'react';
import Table from './Table';

const Competence = ({ competence }) => {
  const headers = ['Skills', 'Abilities', 'Knowledge'];
  const data = competence.map((comp) => [
    comp.skills,
    comp.abilities, 
    comp.knowledge, 
  ]);

  return <Table headers={headers} data={data} />;
};

export default Competence;

