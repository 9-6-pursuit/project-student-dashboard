import "./StudentCard.css"
import { useState } from "react"
import StudentDetail from "./StudentDetail"

export default function StudentCard ({student}){

    const[showMore, setShowMore] = useState(false)

    const toggleShowMore = () => {
        setShowMore(!showMore)
    }
    return (
        <div className="student-card">
            <img src={student.profilePhoto} alt="student-image"></img>
            <div className="student-info-container">
            <h2>{student.names.preferredName} {student.names.surname}</h2>
            <p>{student.username}</p>
            <p>Birthday: {student.dob}</p>
            {showMore ? (
                <div>
                    <a href="#" className="show-more-button" onClick={toggleShowMore}>Show More...</a>
                    <StudentDetail student={student}/>
                </div>
            ) : (
                <a href="#" className="show-more-button" onClick={toggleShowMore}>Show More...</a>
            )} 
            </div>
        </div>
    );
}