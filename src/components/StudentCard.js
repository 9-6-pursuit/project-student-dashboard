import { useState } from "react"
import "./StudentCard.css"
import StudentDetail from "./StudentDetail"
import Comments from "./Comments";


function StudentCard({student}){
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(!showMore)
    }

    let current_total = student.codewars.current.total
    let resume = student.certifications.resume
    let linkedIn = student.certifications.linkedin
    let interview = student.certifications.mockInterview
    let gitHub = student.certifications.github

    function onTrack(){
        if(current_total > 600 && 
            resume === true && 
            linkedIn === true && 
            interview === true && 
            gitHub === true){
            return(
                <p className="ontrack"><span>On Track to Graduate</span></p>
            )
        }
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
                {onTrack()} 
            <Comments />              
            </div>
        </div>
    )
}

export default StudentCard