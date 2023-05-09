import StudentDetails from "./StudentDetails";
import Form from "./Form";
import { useState } from "react";

function Student({student}) {
    const [showMore, setShowMore] = useState(false)
    const toggleShowMore = () => {
        setShowMore(!showMore)
    }
    const [comment, setComment] = useState(student.notes)
    function newComment(event) {
        event.preventDefault()
        setComment([...comment, {commenter: event.target.commenterName.value, comment: event.target.comment.value}])
        event.target.commenterName.value =''
        event.target.comment.value =''
    }

    function birthdayFormat(birthday){
        const today = new Date(birthday);
        const month = today.toLocaleString('default', { month: 'long' })
        const day = today.getDate()
        const year = today.getFullYear()
        return `${month} ${day}, ${year}`
    }
    function onTrack(certs, codeCurrent) {
        if(certs.resume & certs.linkedin & certs.github & certs.mockInterview & codeCurrent > 600){
            return "On Track To Graduate"
        }
    }

    return (
        <div key={student.id} className="container studentBox">
            <div className="row">
                <img src={student.profilePhoto} alt={student.names.preferredName} className="col-auto"></img>
                <div className="col">
                    <p >{student.names.preferredName} {student.names.middleName.charAt(0)}. {student.names.surname}</p>
                    <p>{student.username}</p>
                    <p>Birthday: {birthdayFormat(student.dob)}</p>
                    <button className="btn btn-link" href="#" onClick={toggleShowMore}> {showMore ? "Show less..." : "Show more..."}</button>
                </div>
                <div className="col-3">
                    <p>{onTrack(student.certifications, student.codewars.current.total)}</p>
                </div>
            </div>
            {showMore ?<StudentDetails student={student}/> : <></> }
            {showMore ?<Form student={student} newComment={newComment} comment={comment}/> : <></> }
        </div>
            
    );
  }
  
  export default Student;
  