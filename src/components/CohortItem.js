import React from 'react';

const CohortItem = ({ cohort, handleCohortClick }) => {
  return (
    <div className="cohort-item clickable" onClick={() => handleCohortClick(cohort)}>
      <p className="bold-text">{cohort}</p>
    </div>
  );
};

export default CohortItem;
