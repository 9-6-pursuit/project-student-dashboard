
import StudentCard from "./StudentCard";

function StudentsList({students, heading}){ 
    return(
        <div className="student-list">
            <h2>{heading}</h2>
            <p>Total students: <span className="text-success">{students.length}</span></p>
            {students.map((student)=> {
                return(
                    <StudentCard student={student} key={student.id}/>
                )
            })}
        </div>
    );
}

export default StudentsList;
