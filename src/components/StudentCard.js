import "./StudentCard.css"
import { useState } from "react"
export default function StudentCard({student}){
    const[showMore, setShowMore] = useState(false)
    const toggleShowMore = () => {
        setShowMore(!showMore)
    }
    return(
        <div className="student-card">
            <img src= {student.profilePhoto}></img>

            <div> 
                <h2>{student.names.preferredName} {student.names.surname}</h2>

            </div>
            {showMore ?(
                <div>
                    <a className = "student-info-container"></a>
                </div>
            ) : (
                <a></a>
            )}
            
            <h5></h5>
        </div>
    )
}