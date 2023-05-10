import "./StudentDetails.css"

function StudentDetails({student}) {

    
    let percentOfGoal = (student.codewars.goal.total/student.codewars.current.total)*100;
    let percentOfAssignments = (student.cohort.scores.assignments)*100;
    percentOfAssignments = percentOfAssignments+"%"
    let percentOfProjects = (student.cohort.scores.projects)*100;
    percentOfProjects = percentOfProjects+"%"
    let percentOfAssessments = (student.cohort.scores.assessments)*100;
    percentOfAssessments = percentOfAssessments+"%"
    let resumeCheck = (student.certifications.resume)

  
    console.log(percentOfAssignments)
    console.log(student.certifications.github)

  // function resumeCheck(){
  //   return (student.certifications.resume === true ? 'Done' : 'X')
  // }

  // function resumeCheck2(){
  //   if (student.certifications.resume === true) {
  //     return "✓";
  //   } else return "x"
  // }
  
  return (
    <>

{/* Using Bootstrap's grid system */}

<div className="container">   
  <div className="row header-row">
    <div className="col bold">
        Codewars
    </div>
    <div className="col bold">
        Scores
    </div>
    <div className="col bold">
        Certifications
    </div>
  </div>
  <div className="row">
    <div className="col">
        <p><span className="greenSpan">Current Total: </span>{student.codewars.current.total}</p>
    </div>
    <div className="col">
    <span className="greenSpan">Assignments:</span> {percentOfAssignments}
    </div>
    <div className="col">
    <span className="greenSpan">Resume: </span> {resumeCheck}
    </div>
  </div>
  <div className="row">
    <div className="col">
      <span className="greenSpan">Last Week:</span> {student.codewars.current.lastWeek}
    </div>
    <div className="col">
      <span className="greenSpan">Projects:</span> {percentOfProjects}
    </div>
    <div className="col">
      <span className="greenSpan">LinkedIn: </span>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <span className="greenSpan">Goal: </span>{student.codewars.goal.total}
    </div>
    <div className="col">
      <span className="greenSpan">Assessments:</span> {percentOfAssessments}
    </div>
    <div className="col">
      <span className="greenSpan">Mock Interview: </span> 
    </div>
  </div>
  <div className="row">
    <div className="col">
      <span className="greenSpan">Percent of Goal Achieved: </span>{percentOfGoal.toFixed(0)}%
    </div>
    <div className="col">

    </div>
    <div className="col">
        <span className="greenSpan">GitHub: </span>{student.certifications.github ? "done" : "X"}
    </div>
  </div>
</div>


    </>
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



      ======== code not used ===========

    // console.log("student: ",student)
    // console.log("{student}:" ,{student})
    // console.log("student.codewars:", student.codewars)
    // console.log("student.codewars.current:", student.codewars.current)
    // console.log("student.codewars.current[0]:", student.codewars.current[0])




    ================= reset getting rid of... ================

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/fontawesome-svg-core/import.macro'


// <FontAwesomeIcon icon={icon({name: 'faXmark', style: 'solid', color: 'red', })} />

// "fa-solid fa-xmark" style={{color: "#e60000",}} />

    let xmark=faXmark


    // function iconChoice() {
    //   if (asdfasdf=asdfasdf)
    //   return true
    // }

          {xmark}

*/