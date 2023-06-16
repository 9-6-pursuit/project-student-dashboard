
export default function StudentDetail({student}){
  function goalAchieved(){
      let goal = ((student.codewars.current.total/student.codewars.goal.total )* 100).toFixed()
      if(goal >= 100){
          return <span className="text-success">{goal}</span>
      }
      else if (goal >= 50 && goal < 100){
          return <span className="text-warning">{goal}</span>
      }
      else{
          return <span className="text-danger">{goal}</span>
      }
  }

  return(
      <div className="row">
          <section>
              <h3> Codewars:</h3>
              <p>Current Total: {student.codewars.current.total}</p>
              <p>Last Week: {student.codewars.current.lastWeek}</p>
              <p>Goal: {student.codewars.goal.total}</p>
              <p>Percent of Goal Achieved: {goalAchieved()}%</p>
          </section>
          <section>
              <h3>Scores</h3>
              <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
              <p>Projects: {student.cohort.scores.projects * 100}%</p>
              <p>Assessments: {student.cohort.scores.assignments *100}%</p>
          </section>
          <section className="px-4">
              <h3>Certifications</h3>
              <p>Resume: {student.certifications.resume ? "✅": "❌"}</p>
              <p>LinkedIn: {student.certifications.linkedin ? "✅": "❌"}</p>
              <p>Mock Interview: {student.certifications.mockInterview ? "✅": "❌"}</p>
              <p>GitHub: {student.certifications.github ? "✅": "❌"}</p>
          </section>
      </div>
  )
}

