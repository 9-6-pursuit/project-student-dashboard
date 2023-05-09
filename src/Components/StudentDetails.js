
function StudentDetails({student}) {
  function percentColor(current, total ) {
    let percent = (current/total*100).toFixed(0)
    if (percent >= 100){
      return <span style={{color: "green"}}>{percent}%</span>
    } 
    if(percent >= 50 & percent < 100){
      return <span style={{color: "#fccf03"}}>{percent}%</span>
    }
    return <span style={{color: "red"}}>{percent}%</span>
    
  }

      return (
          <div className="row detailBox">
            <ul className="col-4 list-group-flush">  
              <li className="title">CodeWars</li>
              <li className="list-group-item">Current Total: {student.codewars.current.total}</li>
              <li className="list-group-item">Last Week: {student.codewars.current.lastWeek}</li>
              <li className="list-group-item">Goal: {student.codewars.goal.total}</li>
              <li className="list-group-item">Percent of Goal Achieved: {percentColor(student.codewars.current.total,student.codewars.goal.total)} </li>
            </ul> 
            <ul className="col-4 list-group-flush">
              <li className="title">Scores</li>
              <li className="list-group-item">Assignments: {student.cohort.scores.assignments * 100}%</li>
              <li className="list-group-item">Projects: {student.cohort.scores.projects * 100}%</li>
              <li className="list-group-item">Assessments: {student.cohort.scores.assessments * 100}%</li>
            </ul> 
            <ul className="col-4 list-group-flush">
              <li className="title">Certifications</li>
              <li className="list-group-item">Resume: {student.certifications.resume ? "Yes" : "No"}</li>
              <li className="list-group-item">Linkedin: {student.certifications.linkedin ? "Yes" : "No"}</li>
              <li className="list-group-item">Mock Interview: {student.certifications.mockInterview ? "Yes" : "No"}</li>
              <li className="list-group-item">Github: {student.certifications.github ? "Yes" : "No"}</li>
            </ul>
          </div>
      );
    }
    
    export default StudentDetails;
    