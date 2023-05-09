import StudentCard from "./StudentCard"


//here, the {students} comes down from App.js. It was passed down as propped.

//the parameter (student) in {students.map((student) => ... )} is an element (we choose the element name).  We then use that student element in the Student Card component to pass the information along.

function Students({students}) {
  return (
    <>
    <section className="students students-list">
    <h2>All Students (change to cohort when chosen)</h2>
     Total Students: {students.length}
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