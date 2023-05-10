import StudentCard from "./StudentCard.js";
export default function StudentsList({students}){
    return(
        <div className="student-lists"> 
        {students.map((student) =>{
            return (
                <StudentCard student = {student}/>
            )

        })}

        </div>
    )
    
}
