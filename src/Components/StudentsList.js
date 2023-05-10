import Student from "./Student.js";
import "./StudentsList.css"

function StudentsList ({students}) {
    return (
        <div className="students-list">
            <h2>All Students</h2>
            <h3>Total Students: {students.length}</h3>
          {students.map((student) => {
            return (
                <Student key={student.id} student={student}/>
            )
          })}
        </div>
);
}

export default StudentsList;