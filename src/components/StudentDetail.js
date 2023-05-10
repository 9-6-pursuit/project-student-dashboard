function StudentDetail({ student }) {

  let goalPercentage = Math.floor(student.codewars.current.total / student.codewars.goal.total * 100);

  const getSign = isTrue => isTrue ? "✅" : "❌"

  return (
    <div className="student-detail">
      <div className="individual-detail codewars">
        <h4>Codewars</h4>
        <p><span>Current Total:</span> {student.codewars.current.total}</p>
        <p><span>Last Week:</span> {student.codewars.current.lastWeek}</p>
        <p><span>Goal:</span> {student.codewars.goal.total}</p>
        <p><span>Percent of Goal Achieved:</span> {goalPercentage}%</p>
      </div>
      <div className="individual-detail scores">
        <h4>Scores</h4>
        <p><span>Assignments:</span> {student.cohort.scores.assignments * 100}%</p>
        <p><span>Projects:</span> {student.cohort.scores.projects * 100}%</p>
        <p><span>Assessments:</span> {student.cohort.scores.assessments * 100}%</p>
      </div>
      <div className="individual-detail certifications">
        <h4>Certifications</h4>
        <p><span>Resume:</span> {getSign(student.certifications.resume)}</p>
        <p><span>LinedIn:</span> {getSign(student.certifications.linkedin)}</p>
        <p><span>Mock Interview:</span> {getSign(student.certifications.mockInterview)}</p>
        <p><span>Github:</span> {getSign(student.certifications.github)}</p>
      </div>
    </div>
  );
}

export default StudentDetail;
