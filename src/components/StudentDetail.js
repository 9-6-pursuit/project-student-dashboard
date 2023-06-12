function StudentDetail({student}){
    let current_total = student.codewars.current.total
    let current_lastWeek = student.codewars.current.lastWeek
    let goal_total = student.codewars.goal.total

    let assignments = student.cohort.scores.assignments
    let projects = student.cohort.scores.projects
    let assessments = student.cohort.scores.assessments

    let resume = student.certifications.resume
    let linkedIn = student.certifications.linkedin
    let interview = student.certifications.mockInterview
    let gitHub = student.certifications.github


    return (
        <>
        <ul className="codewars">
            <li><strong>Codewars</strong></li>
            <li>Current Total: {current_total}</li>
            <li>Last Week: {current_lastWeek}</li>
            <li>Goal: {goal_total}</li>
            <li>Percent of Goal Achieved: {Math.round(((current_total)/(goal_total))*100)}%</li>
        </ul>

        <ul className="scores">
            <li><strong>Scores</strong></li>
            <li>Assignments: {assignments*100}% </li>
            <li>Projects: {projects*100}% </li>
            <li>Assessments: {assessments*100}% </li>
        </ul> 

         <ul className="certification">
            <li><strong>Certification</strong></li>
             <li>Resume: {resume ? "✅": "❌"} </li>
             <li>LinkedIn: {linkedIn ? "✅": "❌"} </li>
             <li>Mock Interview: {interview ? "✅": "❌"} </li>
             <li>GitHub: {gitHub ? "✅": "❌"} </li>
        </ul>
         </>
    )
}

export default StudentDetail;