import StudentCard from "./StudentCard";

export default function StudentList({students, heading}){ 
    return(
        <div className="students-list">
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