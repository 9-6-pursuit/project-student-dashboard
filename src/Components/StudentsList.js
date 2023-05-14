// import "./Header.css"
import StudentCard from "./StudentCard";

function StudentsList({students}) {
    return (
      <div className="students-list">

        {students.map((student) => {
            return (
               <StudentCard  key ={student.id} student={student}/>
            )
        })}
    
      </div>
    );
  }
  
  export default StudentsList;