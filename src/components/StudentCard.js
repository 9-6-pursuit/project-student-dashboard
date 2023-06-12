import { useState } from "react"
import "./StudentCard.css"
import StudentDetail from "./StudentDetail"


function StudentCard({student}){
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(!showMore)
    }
    return( 
        <div className="student-card">
            <img src = {student.profilePhoto}></img>
            <div className = "student-info-container">
                <h2>{student.names.preferredName} {student.names.surname}</h2>
                <p>{student.username}</p>
                <p><span>Birthday:</span> {student.dob}</p>

                {showMore ?(
                    <div>
                        <a className="show-more-button" onClick = {toggleShowMore}><span className="underline">Show Less...</span></a>
                        <StudentDetail student = {student} />
                    </div>
                ):(
                    <a className="show-more-button" onClick = {toggleShowMore}><span className="underline">Show More...</span></a>

                )}              
            </div>
        </div>
    )
}

export default StudentCard