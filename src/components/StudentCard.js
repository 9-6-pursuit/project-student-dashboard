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
            <img src={student.profilePhoto} alt={student.names.surname}></img>
            <div className="student-info-container">
            <h2>{student.names.preferredName} {student.names.surname}</h2>
            {showMore ? (
                <div>
                    <a className="show-more-button" onClick={toggleShowMore}>Show More...</a>
                    <StudentDetail student={student}/>
                </div>
            ) : (
                <a className="show-more-button" onClick={toggleShowMore}>Show More...</a>
            )} 
            </div>
        </div>
    );
}