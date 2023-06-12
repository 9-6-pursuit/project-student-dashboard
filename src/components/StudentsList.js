import StudentCard from "./StudentCard.js";
export default function StudentsList({students}){
    return(
        <div className="student-lists"> 
        <h2>All Students </h2>
        {students.map((student) =>{
            return (
                <StudentCard  key={students.length} student = {student}/>
            )

        })}

        </div>
    )
    
}
