import Student from "./Student"
function StudentLists({Students}) {
    return (
      <div className="col">
        <h3>{Students.length < 250 ? Students[0].cohort.cohortCode.slice(0,Students[0].cohort.cohortCode.length-4) + " " + Students[0].cohort.cohortCode.slice(-4) : "All Students"}</h3>
        <h3>Total Students: {Students.length}</h3>
        {Students.map(student => {
          return <Student key = {student.id} student={student}/>

        })

        }
      </div>
    );
  }
  
  export default StudentLists;
  