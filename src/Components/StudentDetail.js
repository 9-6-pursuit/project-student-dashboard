import "./StudentDetail.css"
function StudentDetail({student}) {

  if (student) {
    return (
       
      <div className="students-detail">
      
      <ul className="Code-wars">
      <h3>Codewars</h3>
        {/* <li> username : {student.username}</li> */}
        <li>Current Total : {student.codewars.current.total}</li>
        <li>Last Week: {student.codewars.current.lastWeek}</li>
        <li>Goal: {student.codewars.goal.total}</li>
        <li> Percent Of Goal Achieved : </li>
      </ul>
       
       <ul className="Scores"> 
       <h3>Scores</h3>
       <li>Assignments: % </li>
       <li>Project: % </li>
       <li>Assessment: %</li>
       </ul>

      <ul className="Certifications">
      <h3>Certifications</h3>
             <li>Resume: {student.certifications.resume ? "Yes" : "No"}</li>
              <li>
                LinkedIn: {student.certifications.linkedin ? "Yes" : "No"}
              </li>
              <li>Github: {student.certifications.github ? "Yes" : "No"}</li>
              <li>
                Mock Interview: {student.certifications.mockInterview ? "Yes" : "No"}
              </li>
      </ul>

      </div>
     
    );

  }
    
  }
  
  export default StudentDetail;