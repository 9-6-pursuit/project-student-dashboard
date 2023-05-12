export default function Student({student, showMore, toggleShowMore}) {


    return (

        <>

        {showMore ? (
            <div className="show-more-main-content">

                <ul>
                    {/* <div className="codewars-section"> */}
                    <li>CodeWars:</li>
                    <li><span className="green-text">Current Total: </span>{student.codewars.current.total}</li>
                    <li><span className="green-text">Last Week: </span>{student.codewars.current.lastWeek}</li>
                    <li><span className="green-text">Goal: </span>{student.codewars.goal.total}</li>
                    {/* </div> */}
                </ul>
                <ul>
                    <li>Scores:</li>
                    <li><span className="green-text">Assignments: </span>{student.cohort.scores.assignments * 100}%</li>
                    <li><span className="green-text">Projects: </span>{student.cohort.scores.projects * 100}%</li>
                    <li><span className="green-text">Assessments: </span>{student.cohort.scores.assessments * 100}%</li>
                </ul>
                <ul>
                    <li>Certifications:</li>
                    <li><span className="green-text">Resume:</span>{student.certifications.resume}</li>
                    <li><span className="green-text">LinkedIn:</span>{student.certifications.linkedin}</li>
                    <li><span className="green-text">Mock Interview:</span>{student.certifications.mockInterview}</li>
                    <li><span className="green-text">GitHub:</span>{student.certifications.github}</li>
                </ul>
            </div>
        ) : (
            ""

        )}
        </>
    )
}