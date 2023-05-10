import "./ShowDetail.css";

function ShowDetail({studentsData}) {
  const formatPercent = (value) => `${(value * 100).toFixed(0)}%`;

  const certificationsList = [
    { key: "resume", label: "Resume" },
    { key: "linkedin", label: "LinkedIn" },
    { key: "github", label: "GitHub" },
    { key: "mockInterview", label: "Mock Interview" },
  ].map(({ key, label }) => (
    <li key={key}>
      <span className="primary-text-color">{label}:</span> 
      <span 
        className={studentsData.certifications[key] ? "green-color" : "red-color"} > 
        {studentsData.certifications[key] ? "✅" : "❌"}
      </span>
    </li>
  ));


  const goalTotal = studentsData.codewars.goal.total;
  const percentAchieved = studentsData.codewars.current.total / goalTotal;

  return (
    <div className="show-detail primary-border-color">
      <ul>
        <li className="title cabin-fonts">Codewars:</li>
        <li><span className="primary-text-color">Current Total:</span> {studentsData.codewars.current.total}</li>
        <li><span className="primary-text-color">Last Week:</span> {studentsData.codewars.current.lastWeek}</li>
        <li><span className="primary-text-color">Goal:</span> {goalTotal}</li>
        <li><span className="primary-text-color">Percent of Goal Achieved:</span> {formatPercent(percentAchieved)}</li>
      </ul>

      <ul>
        <li className="title cabin-fonts">Scores</li>
        <li><span className="primary-text-color">Assignments:</span> {formatPercent(studentsData.cohort.scores.assignments)}</li>
        <li><span className="primary-text-color">Projects:</span> {formatPercent(studentsData.cohort.scores.projects)}</li>
        <li><span className="primary-text-color">Assessments:</span> {formatPercent(studentsData.cohort.scores.assessments)}</li>
      </ul>

      <ul>
        <li className="title cabin-fonts">Certifications</li>
        {certificationsList}
      </ul>
    </div>
  );
}

export default ShowDetail;