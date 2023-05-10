import React from 'react';

const ScoresInfo = ({ student }) => {
  const { scores } = student.cohort;
  
  // Convert each score to a percentage by multiplying by 100
  const assignmentsCompletionPercentage = (scores.assignments * 100).toFixed(2);
  const projectsCompletionPercentage = (scores.projects * 100).toFixed(2);
  const assessmentsCompletionPercentage = (scores.assessments * 100).toFixed(2);

  return (
    <div className="scores-info">
      <h3>Scores</h3>
     

      <p><span className="green-text">Assignments:</span> {assignmentsCompletionPercentage}%</p>
<p><span className="green-text">Projects:</span> {projectsCompletionPercentage}%</p>
<p><span className="green-text">Assessments:</span> {assessmentsCompletionPercentage}%</p>

    </div>
  );
};

export default ScoresInfo;
