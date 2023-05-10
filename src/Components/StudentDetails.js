function StudentDetails ({student}) {
    return (
        <ul className="student-details">
            <li>Username: {student.username}</li>
            <li>Birthday: {student.dob}</li>
            <p>Codewars:</p>
            <li>Current total: {student.codewars.current.total}</li>
            <li>Last week: {student.codewars.current.lastWeek}</li>
    
        </ul>
    )
}

export default StudentDetails