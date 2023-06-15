import React from 'react'
import { useState } from 'react'
import StudentDetail from './StudentDetail';
import './StudentCard.css'

function StudentCard({student}) {
    const [showMore, setShowMore] = useState(false);
    const [commentUL, setCommentUL] = useState([]);


    const toggleShowMore = () => {
        setShowMore(!showMore)
    }

    const aRunnerATrackStar = (student) => {
        return(    
            student.certifications.resume === true &&
            student.certifications.linkedin === true &&
            student.certifications.mockInterview === true &&
            student.certifications.github === true && student.codewars.current.total > 600
            )
     }

     const showComments = (event) =>{
        event.preventDefault()
        let comment = event.target.name.value
        //console.log(comment)
        let commenter = event.target.commenterName.value
        //console.log(commenter)
        let officialComment = `${commenter} says, '${comment}'`
        setCommentUL([...commentUL, officialComment])
        event.target.reset()
     }

  return (
    <div className='main'>
    <div className='card'>
    <div className='student-card'>
        <img src={student.profilePhoto} alt='profile'/>
        <div className='student-info'>
            <h2>{student.names.preferredName} {student.names.surname}</h2>
            <StudentDetail student={student} />
            {aRunnerATrackStar(student) ? <p className="track">On Track to Graduate!</p> : null}
            {
                showMore ? (
                    <div>
                        <a className='show-more-button' onClick={toggleShowMore}>Show Less...</a>
                        <div className="student-details">
                                    <div className="codewars">
                                        <h3>Codewars:</h3>
                                        <p>Current Total: {student.codewars.current.total}</p>
                                        <p>Last Week: {student.codewars.current.lastWeek}</p>
                                        <p>Goal: {student.codewars.goal.total}</p>
                                        <p>Percent of Goal Achieved: {(student.codewars.current.total /student.codewars.goal.total).toFixed(2) * 100 }%</p>
                                    </div>

                                    <div className="Scores">
                                        <h3>Scores:</h3>
                                        <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
                                        <p>Projects: {student.cohort.scores.projects * 100}%</p>
                                        <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
                                    </div>

                                    <div className="certifications">
                                        <h3>Certifications</h3>
                                        <p>Resume: {student.certifications.resume ? "✔️" : "✖️"}</p>
                                        <p>LinkedIn: {student.certifications.linkedin ? "✔️" : "✖️"}</p>
                                        <p>Mock Interview: {student.certifications.mockInterview ? "✔️" : "✖️"} </p>
                                        <p>Github: {student.certifications.github ? "✔️" : "✖️"} </p>
                                    </div>

                                    <hr></hr>

                                    <section className="comments">
                                        <h3>1-on-1 Notes</h3>
                                        <form onSubmit={showComments}>
                                            <label htmlFor="commenter-name"> Commenter Name </label>
                                            <input type='text' id="commenterName"/>
                                            <br/>
                                            <label htmlFor="comment">Comment </label>
                                            <input type='text' id="comment" name='name'/>
                                            <br />
                                            <button type="submit">Add Note</button>
                                        </form>
                                        <div className="display-comments">
                                            <ul>
                                                {commentUL.map((element, index) => {
                                                    console.log(element);
                                                    return <li key={index}>{element}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </section>

                                </div>
                        
                    </div>
                ) : (
                    <a className='show-more-button' onClick={toggleShowMore}>Show More...</a>
                )
            }
        </div>
    </div>
    </div>
    </div>
  )
}

export default StudentCard