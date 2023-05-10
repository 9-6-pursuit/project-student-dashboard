import StudentCard from "./StudentCard"

export default function StudentsList ({students}){
    return (
        <div className="student-list">
        <h2>All Students </h2>
        <p>Total Students: {students.length}</p>
        {students.map((student) => {
            return (
                <StudentCard key={student.id} student={student}/>
            )
        })}
            
        </div>
    )
}