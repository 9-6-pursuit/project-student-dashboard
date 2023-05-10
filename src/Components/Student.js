import "./Student.css"
import { useState } from "react";
import StudentDetail from "./StudentDetail";

function Student ({student}) {

const [showMore, setShowMore] = useState(false);

const toggleShowMore = () => {
       setShowMore(!showMore)
}

    return (
        <div className="student-card">
          <img src={student.profilePhoto} alt="student-photo"></img>
          <div className="student-info-container">
              <h2>{student.names.preferredName} {student.names.surname} </h2> 
             <h3>{student.username}</h3> 
             <h3 className="green">Birthday: {student.dob}</h3>
             {showMore ? (
              <div>
              <a className="show-more-button" onClick={toggleShowMore}>Show Less ...</a>
              <StudentDetail />
              </div>
             ) : (
             <a className="show-more-button" onClick={toggleShowMore}>Show More ...</a>
            
             )}
          </div>
        </div>
    );
}

export default Student;