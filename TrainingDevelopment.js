import React from 'react';
import Table from './Table';

const TrainingDevelopment = ({ trainingDevelopment }) => {
  const headers = ['Certification', 'Institute', 'Year'];
  const data = trainingDevelopment.map((training) => [
    training.certification,
    training.institute,
    training.year,
  ]);

  return (
    <div>
    
      <Table headers={headers} data={data} />
    </div>
  );
};

export default TrainingDevelopment;
