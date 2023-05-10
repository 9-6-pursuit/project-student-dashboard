function StudentDetails ({student}) {
    return (
        <ul className="student-details">
            <li>Username: {student.username}</li>
            <li>Birthday: {student.dob}</li>
            <li>{student.codewars.current}</li>
    
        </ul>
    )
}

export default StudentDetails