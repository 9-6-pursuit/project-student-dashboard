import StudentCard from "./StudentCard"

export default function StudentsList ({students}){
    return (
        <div className="student-list">
        {students.map((student) => {
            return (
                <StudentCard key={student.id} student={student}/>
            )
        })}
            
        </div>
    )
}