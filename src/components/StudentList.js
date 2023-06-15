import StudentCard from "./StudentCard"

function StudentList({students}) {
  return (
    <div className="students-list">
      <h1>All Students</h1>
      <p>Total Students: {students.length}</p>
        {
            students.map((student) => {
                return (
                    <StudentCard student={student} />
                )
            })
        }
    </div>
  )
}

export default StudentList