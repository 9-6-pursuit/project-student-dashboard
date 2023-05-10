import React from 'react';

const CodeWarsInfo = ({ student }) => {
  if (!student.codewars) {
    return <p>Loading codewars information...</p>;
  }

  const { codewars } = student;
  const goalAchievedPercentage = ((codewars.current.total / codewars.goal.total) * 100).toFixed(2);

  return (
    <div className="code-wars-info">
      <h3>Codewars:</h3>
        <p><span className="green-text">Current Total:</span> {codewars.current.total}</p>
      <p><span className="green-text">Last Week:</span> {codewars.current.lastWeek}</p>

      <p><span className="green-text">Goal:</span> {codewars.goal.total}</p>
      <p><span className="green-text">Percent of Goal Achieved:</span> {goalAchievedPercentage}%</p>

    </div>
  );
};

export default CodeWarsInfo;

