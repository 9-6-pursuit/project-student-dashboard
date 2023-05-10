

import React, { useState, useEffect } from 'react';
import CohortItem from './CohortItem';

const CohortList = ({ data, handleCohortClick }) => {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    // Process and filter the data to create a unique list of cohorts
    const cohortCodes = [...new Set(data.map(student => student.cohort.cohortCode))];
    setCohorts(cohortCodes);
  }, [data]);

  return (
    <div className="cohort-list">
      <h2 className="cohort-heading">Choose a Class by Start Date</h2>
      <div className="cohort-container">
        <CohortItem className="margin-top" cohort={"All Students"} handleCohortClick={handleCohortClick} />
      </div>
      {cohorts.map((cohort, index) => (
        <div key={index} className="cohort-container">
          <CohortItem className="margin-top" cohort={cohort} handleCohortClick={handleCohortClick} />
          {index !== cohorts.length - 1 && <div className="cohort-line"></div>}
        </div>
      ))}
    </div>
  );
};

export default CohortList;



