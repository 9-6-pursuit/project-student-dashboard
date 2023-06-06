import StudentCard from "./StudentCard"

function StudentList({students}) {
  return (
    <div className="students-list">
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