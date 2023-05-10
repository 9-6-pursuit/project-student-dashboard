import React, { useState } from 'react';
import CohortList from './CohortList';
import StudentList from './StudentList';
import data from '../data/data.json';

const Dashboard = () => {
  const [filteredStudents, setFilteredStudents] = useState(data);
  const [selectedCohort, setSelectedCohort] = useState('All Students');

  const handleCohortClick = (cohort) => {
    setSelectedCohort(cohort);
    if (cohort === 'All Students') {
      setFilteredStudents(data);
    } else {
      const filtered = data.filter((student) => student.cohort.cohortCode === cohort);
      setFilteredStudents(filtered);
    }
  };

  return (
    <div className="dashboard">
      <div className="cohort-list-container">
        <CohortList data={data} handleCohortClick={handleCohortClick} />
      </div>
      <div className="student-list-container">
        <h2>{selectedCohort}</h2>
        <p>Total Students: {filteredStudents.length}</p>
        <StudentList students={filteredStudents} />
      </div>
    </div>
  );
  
};

export default Dashboard;

