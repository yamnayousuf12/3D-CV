import React from 'react';

const ProfessionalQualification = ({ qualifications }) => {
  return (
    <div>
      <h2>{qualifications.title}</h2>
      <ul>
        {qualifications.details.map((qual, index) => (
          <li key={index}>
            <strong>{qual.qualification}</strong> from {qual.institution}, GPA: {qual.gpa}, Completed in {qual.yearOfCompletion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalQualification;
