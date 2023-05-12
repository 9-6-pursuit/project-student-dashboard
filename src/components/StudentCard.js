import "./StudentCard.css"
import StudentDetails from "./StudentDetails.js"
import { useState } from "react"
export default function StudentCard({student}){
    const[showMore, setShowMore] = useState(false)
    const toggleShowMore = () => {
        setShowMore(!showMore)
    }
    return(
        <div className="student-card">
            <img src= {student.profilePhoto}></img>
            <h2>{student.names.preferredName} {student.names.surname}</h2>
            <div className="student-info-container"> 
                <h4>{student.names.preferredName} {student.names.surname}</h4>

                <p>{student.username}</p>
            <p>Birthday: {student.dob}</p>
            {showMore ? (
                <div>
                    <a href="#" className="show-more-button" onClick={toggleShowMore}>Show More...</a>
                    <StudentDetails student={student}/>
                </div>
            ) : (
                <a href="#" className="show-more-button" onClick={toggleShowMore}>Show More...</a>
            )} 
            </div>
        </div>
    )
}