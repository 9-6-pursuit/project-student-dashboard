function StudentDetail({student}){
    let current_total = student.codewars.current.total
    let current_lastWeek = student.codewars.current.lastWeek
    let goal_total = student.codewars.goal.total
    return (
        <ul>
            <li>Codewars: </li>
            <li>Current Total: {current_total}</li>
            <li>Last Week: {current_lastWeek}</li>
            <li>Goal: {goal_total}</li>
            <li>Percent of Goal Achieved: {Math.round(((current_total)/(goal_total))*100)}%</li>
        </ul>

    )
}

export default StudentDetail;