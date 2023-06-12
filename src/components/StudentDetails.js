import "./StudentDetails.css"

export default function({student}) {
    return (
        <section className="detail">
            <div className="detail-column">
                <h3>Codewars</h3>
                <ul>
                    <li><span>Current Total: </span>{student.codewars.current.total}</li>
                    <li><span>Last Week: </span>{student.codewars.current.lastWeek}</li>
                    <li><span>Goal: </span>{student.codewars.goal.total}</li>
                    <li><span>Percent of Goal Achieved: </span>{student.codewars.goal.total}</li>
                </ul>
            </div>
            <div className="detail-column">
                <h3>Scores</h3>
                <ul>
                    <li><span>Assignments: </span>{student.cohort.scores.assignments}</li>
                    <li><span>projects: </span>{student.cohort.scores.projects}</li>
                    <li><span>Asssessments: </span>{student.cohort.scores.assessments}</li>
                </ul>
            </div>
            <div className="detail-column">
                <h3>Certifications</h3>
                <ul>
                    <li><span>Resume: </span>{student.certifications.resume ? <span className="checkmark">&#10003;</span> : <span className="x">X</span>}</li>
                    <li><span>LinkedIn: </span>{student.certifications.linkedin? <span className="checkmark">&#10003;</span> : <span className="x">X</span>}</li>
                    <li><span>Mock Interview: </span>{student.certifications.github? <span className="checkmark">&#10003;</span> : <span className="x">X</span>}</li>
                    <li><span>GitHub: </span>{student.certifications.mockInterview? <span className="checkmark">&#10003;</span> : <span className="x">X</span>}</li>
                </ul>
            </div>
        </section>
    )
}