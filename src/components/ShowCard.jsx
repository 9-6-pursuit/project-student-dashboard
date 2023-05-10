function ShowCard({student}) {
  return (
    <table className="table table-borderless ">
  <thead>
    <tr>
      <th scope="col ">Codewars</th>
      <th scope="col">Scores</th>
      <th scope="col">Certification</th>
    </tr>
  </thead>
  <tbody>
    <tr>     
      <td className="text-success">Current Total: {student.codewars.current.total}</td>
      <td className="text-success">Assignments: {student.cohort.scores.assignments}</td>
      <td className="text-success">Resume: <span className="h5 text-danger">X</span></td>
    </tr>
    <tr>
      <td className="text-success">Last Week: {student.codewars.current.lastWeek}</td>
      <td className="text-success">Projects: {student.cohort.scores.projects}</td>
      <td className="text-success">LinkedIn: <span className="h5 text-danger">X</span></td>
    </tr>
    <tr>
      <td className="text-success">Goal: {student.codewars.goal.total}</td>
      <td className="text-success">Assessments: {student.cohort.scores.assessments}</td>
      <td className="text-success">Mock Interview: <span className="h5 text-danger">X</span></td>
    </tr>
    <tr>
      <td  className="text-success"colSpan="2">Percant of Goal Achived: {parseInt((student.codewars.current.total/student.codewars.goal.total)*100)}%</td>
      <td className="text-success">GitHub: <span className="h5 text-danger">X</span></td>
    </tr>
  </tbody>
</table>
  )  
}

export default ShowCard;