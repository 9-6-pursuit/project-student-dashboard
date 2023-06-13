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
        <div class = "container">
        <ul className="codewars">
            <h5><strong>Codewars:</strong></h5>
            <li><span>Current Total:</span> {current_total}</li>
            <li><span>Last Week:</span> {current_lastWeek}</li>
            <li><span>Goal:</span> {goal_total}</li>
            <li><span>Percent of Goal Achieved:</span> {Math.round(((current_total)/(goal_total))*100)}%</li>
        </ul>

        <ul className="scores">
            <h5><strong>Scores</strong></h5>
            <li><span>Assignments:</span> {assignments*100}% </li>
            <li><span>Projects:</span> {projects*100}% </li>
            <li><span>Assessments:</span> {assessments*100}% </li>
        </ul> 

         <ul className="certification">
             <h5><strong>Certification</strong></h5>
             <li><span>Resume:</span> {resume ? "✅": "❌"} </li>
             <li><span>LinkedIn:</span> {linkedIn ? "✅": "❌"} </li>
             <li><span>Mock Interview:</span> {interview ? "✅": "❌"} </li>
             <li><span>GitHub:</span> {gitHub ? "✅": "❌"} </li>
        </ul>
         </div>
    )
}

export default StudentDetail;
