import StudentCard from "./StudentCard"




//here, the {students} comes down from App.js. It was passed down as prop.

//the parameter (student) in {students.map((student) => ... )} is an element (we choose the element name).  We then use that student element in the Student Card component to pass the information along.

function Students({students}) {

  function whichCohort() {
    if (students.length === 250) {
      return "All Students";
    } else {
      return students[0].cohort.cohortCode
    }
}

  return (
    <>
    <section className="students students-list">
    <h2>{whichCohort(students)}</h2>
     Total Students: {students.length}
     <br/>
        <div className="container">
            {students.map((student) => {
                return(
                    <StudentCard student={student} key={student.id}/>
                )
            })}
        </div>
    </section>
    </>
  )
}

export default Students