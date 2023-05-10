import "./StudentCard.css"

function StudentDetail({student}) {
    return(
       <ul>
        <li>Username: {student.username}</li>
        <li>Date of birth: {student.dob}</li>
       </ul>
    )
}

export default StudentDetail