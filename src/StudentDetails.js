

function StudentDetails({student}) {
    // console.log("student: ",student)
    // console.log("{student}:" ,{student})
    // console.log("student.codewars:", student.codewars)
    // console.log("student.codewars.current:", student.codewars.current)
    console.log("student.codewars.current.total:", student.codewars.current.total)
    // console.log("student.codewars.current[0]:", student.codewars.current[0])

    let percentOfGoal = (student.codewars.goal.total/student.codewars.current.total)*100

  return (
    <div>
        StudentDetails
        <p>Codewars</p>
        <p>Current Total: {student.codewars.current.total}</p>
        <p>Last Week: {student.codewars.current.lastWeek}</p>
        <p>Goal: {student.codewars.goal.total}</p>
        <p>Percent of Goal Achieved: {percentOfGoal.toFixed(0)}%</p>


    </div>
  )
}

export default StudentDetails



/*

      "codewars": {
        "current": { "total": 1804, "lastWeek": 144 },
        "goal": { "total": 850, "lastWeek": 75 }
      },
      "certifications": {
        "resume": false,
        "linkedin": false,
        "github": false,
        "mockInterview": false
      },

*/