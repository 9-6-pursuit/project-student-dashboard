import { Fragment, useState } from "react";
import "./StudentCard.css"



function StudentCard({student}) {
    const [showMore, setShowMore] = useState(false);

    function toggleShowMore() {
        setShowMore(!showMore)
    }

    function formatDate(dateString) {
        const months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June",        
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
        ];
        const date = new Date(dateString);
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        return `${months[monthIndex]} ${day}, ${year}`;
      }

    return (
        <div className="student-card">
            <h1>This is the student card.</h1>
            <h1>{student.names.preferredName} {student.names.surname}</h1>
            <img src={student.profilePhoto}></img>
            <h1>{student.username}</h1>
            <h1>{formatDate(student.dob)}</h1>
            <a onClick={toggleShowMore}>Show More</a>
            {showMore ? (
            
                <p>{student.codewars}</p>
                
            ) : (
                <p>This is false.</p>
            )}
        </div>
    )
}

export default StudentCard;