import StudentCard from "./StudentCard.js"

function StudentsList ({students}){
    return (
        <div className = "students-list">
            <h3>All Students</h3>
            <p>Total Students: {students.length}</p>
            {students.map((student)=>{
                return(
                    <StudentCard key = {student.id} student = {student} />
                )
            })}
        </div>
    )
}

export default StudentsList;