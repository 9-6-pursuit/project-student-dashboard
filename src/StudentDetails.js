

function StudentDetails({student}) {

    console.log("student.codewars.current.total:", student.codewars.current.total)
    
    let percentOfGoal = (student.codewars.goal.total/student.codewars.current.total)*100



  return (
    <>

{/* Using Bootstrap's grid system */}

<div className="container">   
  <div className="row header-row">
    <div className="col">
        Codewars
    </div>
    <div className="col">
        Scores
    </div>
    <div className="col">
        Certifications
    </div>
  </div>
  <div className="row">
    <div className="col">
        <p>Current Total: {student.codewars.current.total}</p>
    </div>
    <div className="col">
        Assignments:  ___ %
    </div>
    <div className="col">
        Resume:  
    </div>
  </div>
  <div className="row">
    <div className="col">
      Last Week: {student.codewars.current.lastWeek}
    </div>
    <div className="col">
        Two of three columns
    </div>
    <div className="col">
        Three of three columns
    </div>
  </div>
  <div className="row">
    <div className="col">
      Goal: {student.codewars.goal.total}
    </div>
    <div className="col">
        Two of three columns
    </div>
    <div className="col">
        Three of three columns
    </div>
  </div>
  <div className="row">
    <div className="col">
      Percent of Goal Achieved: {percentOfGoal.toFixed(0)}
    </div>
    <div className="col">
        Two of three columns
    </div>
    <div className="col">
        Three of three columns
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