import "./StudentCard.css"
import StudentDetail from "./StudentDetail";
import { useState } from "react";

function StudentCard({student}) {
  const [showMore, setShowMore] = useState(false);
 
  const toggleShowMore = () => {
    setShowMore(!showMore)
  }
  console.log(student)
    return (
       
      <div className="students-card">
        
        <img src= {student.profilePhoto} alt={student.names.preferredName}/>

        <ul> 
        <h2>{student.names.preferredName} {student.names.surname}</h2>
        <h3> {student.username}</h3>
        <h3> Birthday: {student.dob}</h3>
      

        {/* <h1> {showMore ? "true": "false"}</h1> */}
       
         {showMore ? (
         <div>
           <a className="show-more-button" onClick={toggleShowMore}> Show Less .. </a>
          <StudentDetail student={student}/>
          </div>  ):(
            <a className="show-more-button" onClick={toggleShowMore}> Show More .. </a> )}
        </ul>
  
       
       
      </div>
     
    );
  }
  
  export default StudentCard;